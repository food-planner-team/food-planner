// import parseISO from "date-fns/parseISO";
// import parse from "date-fns/parse";
// import format from "date-fns/format";
import moment from "moment";

export const parseISOtoDate = (date) => parseISO(date);

export const getDateInBrowsersLocaleFormat = (date) => {
    const locale = navigator.language.split("-")[0];
    if (locale === "pl") {
        return format(parseISOtoDate(date), "dd/MM/yyyy");
    } else {
        return format(parseISOtoDate(date), "yyyy/MM/dd");
    }
};

export const getDateAndHourInBrowsersLocaleFormat = (date) => {
    const locale = navigator.language.split("-")[0];
    if (locale === "pl") {
        return format(parseISOtoDate(date), "dd/MM/yyyy, HH:mm:ss");
    } else {
        return format(parseISOtoDate(date), "yyyy/MM/dd, HH:mm:ss");
    }
};

/**
 * Adjusted to standard backend format, e.g. 2021-01-21 10:53:44
 */
export const getLocalDateAndTime = (dateString) => {
    const locale = navigator.language.split("-")[0];

    const parsedDate = parse(
        dateString + " +00",
        "yyyy-MM-dd HH:mm:ss x",
        new Date()
    );

    if (locale === "pl") {
        return format(parsedDate, "dd/MM/yyyy, HH:mm:ss");
    } else {
        return format(parsedDate, "yyyy/MM/dd, HH:mm:ss");
    }
};

export const getLocalTime = (dateString) => {
    const parsedDate = parse(
        dateString + " +00",
        "yyyy-MM-dd HH:mm:ss x",
        new Date()
    );

    return format(parsedDate, "HH:mm:ss");
};

export const getLocalDate = (dateString) => {
    const locale = navigator.language.split("-")[0];

    const parsedDate = parse(
        dateString + " +00",
        "yyyy-MM-dd HH:mm:ss x",
        new Date()
    );

    if (locale === "pl") {
        return format(parsedDate, "dd/MM/yyyy");
    } else {
        return format(parsedDate, "yyyy/MM/dd");
    }
};

export const getThisWeekDates = () => {
    const weekDates = [];

    for (var i = 1; i <= 7; i++) {
        weekDates.push(moment().day(i));
    }

    return weekDates.map((e) => e.format("YYYY-MM-DD"));
};

export const getFirstDayOfWeek = () => {
    const thisWeekDates = getThisWeekDates();

    return thisWeekDates[0];
};

export const getLastDayOfWeek = () => {
    const thisWeekDates = getThisWeekDates();

    return thisWeekDates[thisWeekDates.length - 1];
};
