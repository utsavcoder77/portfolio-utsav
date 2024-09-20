import { API_URL } from "../constants";
async function contactAction(data) {
    const url = `${API_URL}/contact`;
    const respone = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return respone;
}
export default contactAction;
