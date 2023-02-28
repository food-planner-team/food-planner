import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";
import _get from "lodash/get";
import Image from "../../System/models/Image.js";

const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    brand_name: Joi.string().required(),
    sku: Joi.string().required(),
    external_id: Joi.string().required(),
    provider: Joi.string().required(),
    quantity: Joi.number().required(),
    quantity_type: Joi.string().required(),
});

class Product {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.name = data.name;
        this.brand_name = data.brand_name;
        this.sku = data.sku;
        this.external_id = data.external_id;
        this.provider = data.provider;
        this.quantity = data.quantity;
        this.quantity_type = data.quantity_type;
        const image = _get(data, "image.data");
        if (image) {
            this.image = new Image(image);
        }
    }

    static async getProducts(params) {
        const response = await Api.get("/products", {
            params: params,
        });

        return convertToArrayOfModels(Product, response.data.data);
    }
}

export default Product;
