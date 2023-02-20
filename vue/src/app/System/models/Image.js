import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import _get from "lodash/get";

const schema = Joi.object({
    id: Joi.number().required(),
    url: Joi.string().required(),
});

class Image {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.url = data.url;
    }

}

export default Image;
