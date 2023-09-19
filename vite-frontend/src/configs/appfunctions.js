

export const getTheme = (theme) => {
    return theme.colorScheme === "dark"
}

export const getTimezone = (date) => {
    if (date) {
        let d = new Date(date);
        let timeZone = d?.toString().match(/\(([A-Za-z\s].*)\)/)[1];
        return timeZone
    }
    return ""
}

export const limitText = (text, limit) => {
    let txt = ""
    if (text.length >= limit) {
        txt = text.substring(0, limit)
    }
    txt = text
    return txt
}

export const limitChars = (word, limit) => {
    if (word?.length <= limit) {
        return word;
    }
    return word?.substring(0, limit) + "...";
}