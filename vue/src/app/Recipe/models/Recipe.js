import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";
import _get from "lodash/get";
import Image from "../../System/models/Image.js";
import RecipeItem from "./RecipeItem.js";
import store from "../../../plugins/store";

const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    preparation: Joi.string().allow(null).required(),
    preparation_time: Joi.number().required(),
    description: Joi.string().required(),
    kcal: Joi.number().required(),
    status: Joi.number().required(),
    user_id: Joi.number().required(),
});

class Recipe {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.name = data.name;
        this.preparation = data.preparation;
        this.preparationTime = data.preparation_time;
        this.description = data.description;
        this.kcal = data.kcal;
        this.status = data.status;
        this.userId = data.user_id;

        const image = _get(data, "image.data");
        if (image) {
            this.image = new Image(image);
        }

        const recipeItems = _get(data, "recipeItems.data");
        if (recipeItems) {
            this.recipeItems = convertToArrayOfModels(RecipeItem, recipeItems);
        }
    }

    static async getUserRecipes(params) {
        const userId = store.getters["User/getUserId"];

        const paramsData = {
            include: "image,recipeItems.product",
            owner: userId,
            ...params,
        };

        const response = await Api.get("/recipes", {
            params: paramsData,
        });

        return {
            recipes: convertToArrayOfModels(Recipe, response.data.data),
            meta: response.data.meta,
        };
    }

    static async getRecipes(params) {
        const paramsData = {
            include: "image,recipeItems.product",
            status: 1,
            ...params,
        };

        const response = await Api.get("/recipes", {
            params: paramsData,
        });

        return {
            recipes: convertToArrayOfModels(Recipe, response.data.data),
            meta: response.data.meta,
        };
    }
}

export default Recipe;

export const RecipeStatusEnum = {
    PENDING: 0,
    ACCEPTED: 1,
    REJECTED: 2,
    ALL: 3,
};
