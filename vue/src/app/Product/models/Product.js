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
    kcal: Joi.number().required(),
    status: Joi.number().required(),
    user_id: Joi.number().required(),
    created_at: Joi.string().required(),
});

class Product {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.name = data.name;
        this.quantity = data.quantity;
        this.quantityType = data.quantity_type;
        this.kcal = data.kcal;
        this.status = data.status;
        this.userId = data.user_id;
        this.createdAt = data.created_at;

        const image = _get(data, "image.data");
        if (image) {
            this.image = new Image(image);
        }

        const user = _get(data, "user.data");
        if (user) {
            this.user = new User(user);
        }
    }

    static async getProducts(params) {
        const paramsData = {
            include: "image,user",
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

    static async updateProductStatus(productId, status) {
        const response = await Api.post(`/products/${productId}/statuses`, {
            status,
        });

        return new Product(response.data.data);
    }

    static async removeProduct(productId) {
        const response = await Api.delete(`/products/${productId}`);

        return response;
    }

    static async createProduct(data) {
        const response = await Api.post("/products", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return new Product(response.data.data);
    }

    static async getProductById(productId) {
        const response = await Api.get(`/products/${productId}`, {
            params: {
                include: "image",
            },
        });

        return new Product(response.data.data);
    }

    static async updateProduct(productId, data) {
        const response = await Api.post(`/products/${productId}`, data, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return new Product(response.data.data);
    }
}

export default Product;

export const ProductStatusEnum = {
    PENDING: 0,
    ACCEPTED: 1,
    REJECTED: 2,
    ALL: 3,
};
