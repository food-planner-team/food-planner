import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import _get from "lodash/get";
import store from "../../../plugins/store/index.js";

const schema = Joi.object({
    id: Joi.number().required(),
    email: Joi.string().required(),
});

class Pdf {
    static async generatePdf(dateStart, dateEnd) {
        const data = await Api.get(
            `/user/pdf-recipes?date_start=${dateStart}&date_end=${dateEnd}`,
            {
                responseType: "blob",
            }
        )
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                throw error;
            });

        return data;
    }
}

export default Pdf;
