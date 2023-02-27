import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";
import _get from "lodash/get";
import Image from "../../System/models/Image.js";
import Product from "./Product.js";

const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    quantity_type: Joi.string().required(),
});

class MainProduct {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.name = data.name;
        this.quantity_type = data.quantity_type;
        const products = _get(data, "products.data");
        if (products) {
            this.products = convertToArrayOfModels(Product, products);
        }
        const defaultProduct = _get(data, "defaultProduct.data");
        if (defaultProduct) {
            this.defaultProduct = new Product(defaultProduct);
        }
    }

    static async getMainProducts(params) {
        const response = await Api.get("/main-products", {
            params: params,
        });

        return convertToArrayOfModels(MainProduct, response.data.data);
    }

    static async createMainProduct(params, data) {
        const response = await Api.post("/main-products", {
            params: params,
            ...data,
        });

        return new MainProduct(response.data.data);
    }
}

export default MainProduct;
