import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";
import _get from "lodash/get";
import Image from "../../System/models/Image.js";
import RecipeItem from "./RecipeItem.js";

const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    preparation: Joi.string().allow(null).required(),
    preparation_time: Joi.number().required(),
    description: Joi.string().required(),
});

class Recipe {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.name = data.name;
        this.preparation_time = data.preparation_time;
        this.preparation = data.preparation;
        this.description = data.description;
        this.order = data.order;
        this.date = data.date;
        const image = _get(data, "image.data");
        if (image) {
            this.image = new Image(image);
        }

        const recipeItems = _get(data, "recipeItems.data");
        if (recipeItems) {
            this.recipeItems = convertToArrayOfModels(RecipeItem, recipeItems);
        }
    }

    static async fetchUserRecipes(include) {
        const response = await Api.get("/user/recipes", {
            params: include,
        });
        return convertToArrayOfModels(Recipe, response.data.data);
    }

    static async saveUserRecipes(date, recipes) {
        const response = await Api.post("/user/recipes", {
            date,
            recipes,
        });
        return convertToArrayOfModels(Recipe, response.data.data);
    }

    static async createRecipe(data) {
        const response = await Api.post("/recipes", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return new Recipe(response.data.data);
    }

    static async getRecipes(params) {
        const response = await Api.get("/recipes", {
            params: params,
        });

        return {
            recipes: convertToArrayOfModels(Recipe, response.data.data),
            meta: response.data.meta,
        };
    }
    static async getRecipeById(id, params) {
        const response = await Api.get(`/recipes/${id}`, {
            params: params,
        });

        return new Recipe(response.data.data);
    }
}

export default Recipe;
