export const displayCorrectQuantityType = (value, type) => {
    let convertedValue = 0;
    let unit;

    if (type === "g") {
        if (value >= 1000) {
            convertedValue = value / 1000;
            unit = "kg";
        } else if (value >= 100) {
            convertedValue = value / 10;
            unit = "dag";
        } else {
            convertedValue = value;
            unit = "g";
        }
    } else if (type === "ml") {
        if (value >= 1000) {
            convertedValue = value / 1000;
            unit = "l";
        } else {
            convertedValue = value;
            unit = "ml";
        }
    } else if (type === "szt.") {
        convertedValue = value;
        unit = "szt.";
    }

    return `${convertedValue.toLocaleString(undefined, {
        maximumFractionDigits: 1,
    })} ${unit}`;
};
