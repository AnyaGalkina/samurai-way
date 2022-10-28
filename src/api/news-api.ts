import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
        withCredentials: true,
        // baseURL: "https://newsapi.org/v1/articles",
        headers: {"x-api-key": "bc605f10d8ec43b4bb058ea789b7f3e8"}
        // headers: {"x-api-key": "4dbc17e007ab436fb66416009dfb59a8"}
    }
)

export const newsAPI = {
    // getNews(params: NewsParamsType) {
    //     return instance.get<NewsParamsType, AxiosResponse<NewsResType>>("https://newsapi.org/v1/articles", {params})
    // }
    getNews() {
        return instance.get<NewsResType>("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com")
    }
}

export type NewsParamsType = {
    source: string;
    sortBy: string;
    apiKey: string;
}


export type NewsResType = {
    status: string,
    totalResults: string,
    articles: Array<ArticleType>
}
// export type NewsResType = {
// 	status: string,
// 	source: string,
// 	sortBy: string,
// 	articles: Array<ArticlesType>
// }

export type ArticleType = {
    source: {
        id: string;
        name: string
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt?: any;
    content: string
}
