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

export const filteredItems = (favorite, items, filteredArr) => {
    for (let i = 0; i < favorite.length; i += 1) {
      items.filter((item) => item.id === favorite[i] && filteredArr.push(item));
    }
  };