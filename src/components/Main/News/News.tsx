import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ArticleType} from "../../../api/news-api";
import {NewsItem} from "./NewsItem/NewsItem";

const News = () => {
    const dispatch = useDispatch();
    const articles = useSelector<AppStateType, Array<ArticleType>>(state => state.newsPage.articles);

    // const params = {
    //     source: "bbc-news",
    //     sortBy: "top",
    //     apiKey: "bc605f10d8ec43b4bb058ea789b7f3e8"
    // apiKey: "4dbc17e007ab436fb66416009dfb59a8"
    // }

    // useEffect(() => {
    //     dispatch(getTopNews(params))
    // }, [])


    return (
        <div>
            <h1>Top TechCrunch news</h1>
            {articles.map(a => {
                return <NewsItem article={a}/>
            })}
        </div>
    );
};

export default News;