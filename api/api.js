import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://news-app-87li.onrender.com/api"
});

export const getUsernames = () => {
    return newsApi.get("/users").then(({ data }) => {
        return data.users;
    });
};

export const getArticles = () => {
    return newsApi.get("/articles").then(({ data }) => {
        return data.articles;
    });
};

export const getArticleById = (id) => {
    const articleName = `article${id}`
    return newsApi.get(`/articles/${id}`).then(({ data: { [articleName]: article } }) => {
        return article
    })
}

export const getCommentsById