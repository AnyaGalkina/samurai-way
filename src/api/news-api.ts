import axios from "axios";

export const instance = axios.create({ })

export const newsAPI = {
    getNews(currentPage : number) {
        return instance.get<NewsResType>(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=10&page=${currentPage}&apiKey=bc605f10d8ec43b4bb058ea789b7f3e8`)
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
