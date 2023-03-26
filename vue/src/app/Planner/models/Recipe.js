import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";
import _get from "lodash/get";
import Image from "../../System/models/Image.js";

const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    preparation_time: Joi.number().required(),
    description: Joi.string().required(),
});

class Recipe {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.name = data.name;
        this.preparation_time = data.preparation_time;
        this.description = data.description;
        this.order = data.order;
        this.date = data.date;
        const image = _get(data, "image.data");
        if (image) {
            this.image = new Image(image);
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

    static async createRecipe(params, data) {
        const response = await Api.post("/recipes", {
            params: params,
            ...data,
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
}

export default Recipe;
