import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import _get from "lodash/get";
import MainProduct from "../../Product/models/MainProduct.js";

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

        const mainProduct = _get(data, "mainProduct.data");
        if (mainProduct) {
            this.mainProduct = new MainProduct(mainProduct);
        }
    }
}

export default RecipeItem;
