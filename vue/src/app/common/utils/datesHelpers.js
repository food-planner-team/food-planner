import moment from "moment";

export const getThisWeekDates = () => {
    const weekDates = [];

    for (var i = 1; i <= 7; i++) {
        weekDates.push(moment().day(i));
    }

    return weekDates.map((e) => e.format("YYYY-MM-DD"));
};

export const getFirstDayOfWeek = () => {
    return getThisWeekDates()[0];
};

export const getLastDayOfWeek = () => {
    return getThisWeekDates().at(-1);
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
