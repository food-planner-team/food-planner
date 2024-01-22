import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";
import store from "../../../plugins/store/index.js";
import _get from "lodash/get.js";
import Image from "./Image.js";
import Recipe from "../../Recipe/models/Recipe.js";
import Product from "../../Product/models/Product.js";

const schema = Joi.object({
    id: Joi.string().required(),
    notifiable_id: Joi.number().required(),
    notifiable_type: Joi.string().required(),
    type: Joi.string().required(),
    data: Joi.string().required(),
    read_at: Joi.date().required().allow(null),
});

class Message {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.notifiable_id = data.notifiable_id;
        this.notifiable_type = data.notifiable_type;
        this.type = data.type;
        data.data = JSON.parse(data.data);
        this.data = data.data;
        this.read_at = data.read_at;

        if (
            this.type === "App\\Notifications\\RecipeStatusChangedNotification"
        ) {
            const recipe = _get(data.data, "recipe");
            if (recipe) {
                this.item = new Recipe(recipe);
            }
        }
        if (
            this.type === "App\\Notifications\\ProductStatusChangedNotification"
        ) {
            const product = _get(data.data, "product");
            if (product) {
                this.item = new Product(product);
            }
        }
    }

    static async getNotifications() {
        const paramsData = {
            user: store.getters["User/getUser"].id,
        };

        const response = await Api.get("/notifications", {
            params: paramsData,
        });

        return {
            notifications: convertToArrayOfModels(Message, response.data.data),
        };
    }

    static async readNotifications(notifications) {
        const unreadNotifications = notifications.filter(
            (e) => e.read_at === null
        );
        unreadNotifications.forEach((notification) => {
            notification.read_at = new Date();
        });
        const ids = unreadNotifications.map((notification) => notification.id);
        if (ids.length === 0) {
            return;
        }

        const response = await Api.post("/notifications/read", {
            ids: ids,
        });
        return response.data;
    }
}

export default Message;
