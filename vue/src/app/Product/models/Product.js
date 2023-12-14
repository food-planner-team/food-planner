import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";
import _get from "lodash/get";
import Image from "../../System/models/Image.js";
import User from "../../System/models/User.js";

const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    quantity_type: Joi.string().required(),
});

class Product {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.name = data.name;
        this.quantity = data.quantity;
        this.quantityType = data.quantity_type;

        // const image = _get(data, "image.data");
        // if (image) {
        //     this.image = new Image(image);
        // }

        const user = _get(data, "user.data");
        if (user) {
            this.user = new User(user);
        }
    }

    static async getProducts(params) {
        const paramsData = {
            include: "image",
            status: 1,
            ...params,
        };

        const response = await Api.get("/products", {
            params: paramsData,
        });

        return {
            products: convertToArrayOfModels(Product, response.data.data),
            meta: response.data.meta,
        };
    }
}

export default Product;
