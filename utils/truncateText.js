export const truncateText = (str) => {
    return str.length > 100 ? str.substring(0, 80) + "..." : str;
}
