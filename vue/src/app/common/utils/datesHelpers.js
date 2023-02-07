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
