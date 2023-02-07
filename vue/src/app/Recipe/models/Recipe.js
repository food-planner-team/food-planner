import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";

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
}

export default Recipe;
