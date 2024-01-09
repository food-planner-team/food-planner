import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import _get from "lodash/get";
import Product from "../../Product/models/Product.js";

const schema = Joi.object({
    id: Joi.number().required(),
    quantity: Joi.number().required(),
    optional: Joi.number().required(),
    url: Joi.string().allow(null).required(),
});

class RecipeItem {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.quantity = data.quantity;
        this.optional = data.optional;
        this.url = data.url;

        const product = _get(data, "product.data");
        if (product) {
            this.product = new Product(product);
        }
    }
}

export default RecipeItem;
