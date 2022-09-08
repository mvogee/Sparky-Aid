

export const getTakeup = (size: string, type: string) => {
    let takeup : number = 0;
    switch (size) {
        case "1/2":
            takeup = (type === "EMT" ? 5 : 6);
            break;
        case "3/4":
            takeup = (type === "EMT" ? 6 : 8);
            break;
        case "1":
            takeup = (type === "EMT" ? 8 : 11);
            break;
        case "1 1/4":
            takeup = (type === "EMT" ? 11 : 88);
            break;
        default:
            takeup = 0;
            break;
    }
    return (takeup);
};