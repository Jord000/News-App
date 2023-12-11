import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://news-app-87li.onrender.com/api"
});

export const getUsernames = () => {
    return newsApi.get("/users").then(({ data }) => {
        return data.users;
    });
};