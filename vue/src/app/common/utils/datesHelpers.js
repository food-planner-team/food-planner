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

// export const getCurrentDayName = (date) => {
//     return moment(date).format("dddd");
// };

export const getCurrentDayName = (date) => {
    const d = new Date(`${date}`);
    let numberOfDay = d.getDay();
    let day;

    switch (numberOfDay) {
        case 0:
            day = "Niedziela";
            break;
        case 1:
            day = "Poniedziałek";
            break;
        case 2:
            day = "Wtorek";
            break;
        case 3:
            day = "Środa";
            break;
        case 4:
            day = "Czwartek";
            break;
        case 5:
            day = "Piątek";
            break;
        case 6:
            day = "Sobota";
    }

    return day;
};
