import Api from "../../common/services/Api.js";
import _get from "lodash/get";

class Pdf {
    static async generatePdf(dateStart, dateEnd) {
        const data = await Api.get(
            `/user/pdf-recipes?date_start=${dateStart}&date_end=${dateEnd}`,
            {
                responseType: "blob",
            }
        )
            .then((response) => {
                return response;
            })
            .catch((error) => {
                throw error;
            });

        return data;
    }

    static async generateSoppingList(dateStart, dateEnd) {
        const data = await Api.get(
            `/user/shopping-list?date_start=${dateStart}&date_end=${dateEnd}`,
            {
                responseType: "blob",
            }
        )
            .then((response) => {
                return response;
            })
            .catch((error) => {
                throw error;
            });

        return data;
    }
}

export default Pdf;
