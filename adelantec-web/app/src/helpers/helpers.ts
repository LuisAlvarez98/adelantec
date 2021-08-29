import axios from "axios";

let URL: string;
//route
URL = "https://adelantec-api.herokuapp.com/api/";

export const GetAreas = async () => {
    try {
        let response = await axios.get(URL + `area`);

        return response.data;
    } catch (e) {
        console.log(e);
    }
}