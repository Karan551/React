export const apiRequest = async (url = "", options = null, errorMsg = null) => {
    try {


        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Data can't be fetched via requeset...");
    } catch (error) {
        errorMsg = error.message;
    } finally {
        return errorMsg;
    }
};