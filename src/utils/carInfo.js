export const stringSlice = (address) => {
    const arr = address?.split(", ");
    arr?.shift();
    const str = arr?.join(" | ");
    return str
}

export const stringCut = (string) => {
    const arr = string.split("\n");
    const stringr = arr.join("  ")
    return stringr
}