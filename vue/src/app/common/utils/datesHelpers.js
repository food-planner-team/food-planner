import moment from "moment";

export const getCurrentWeek = () => {
    const currentDate = moment();
    const weekStart = currentDate.clone().startOf("isoWeek");
    const days = [];

    for (let i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, "days").format("YYYY-MM-DD"));
    }

    return days;
};

export const getFirstDayOfWeek = () => {
    return getCurrentWeek()[0];
};

export const getLastDayOfWeek = () => {
    return getCurrentWeek().at(-1);
};

export const getCurrentDay = () => {
    return moment().format("YYYY-MM-DD");
};

export const getCurrentDayName = (date) => {
    const days = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
    ];
    return days[moment(date).day()];
};

export const getLocaleDate = (date) => {
    const event = new Date(date);
    const options = {
        weekday: "long",
        // year: "numeric",
        month: "long",
        day: "numeric",
    };

    return event.toLocaleDateString("pl-PL", options);
};

export const getDatesBetweenDays = (dateStart, dateEnd) => {
    const listDate = [];

    const dateMove = new Date(dateStart);
    let strDate = dateStart;

    while (strDate < dateEnd) {
        strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
    }

    return listDate;
};
