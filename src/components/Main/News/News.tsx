import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ArticleType} from "../../../api/news-api";
import {NewsItem} from "./NewsItem/NewsItem";
import {getTopNews, setNewsCurrentPage} from "../../../redux/news-reducer";
import Pagination from "../../common/Pagination/Pagination";
import {Title} from "../../common/Title/Title";

const News = () => {
    const currentPage = useSelector<AppStateType, number>(state => state.newsPage.currentPage)
    const dispatch = useDispatch();
    const articles = useSelector<AppStateType, Array<ArticleType>>(state => state.newsPage.articles);

    const setNewsCurrentPageHandler = (page: number) => {
        dispatch(setNewsCurrentPage(page));
    }

    useEffect(() => {
        dispatch(getTopNews(currentPage));
    }, [currentPage, dispatch])

    return (
        <div>
            <Title title={"Top TechCrunch news"}/>
            <Pagination currentPage={currentPage} totalItemsCount={50} onPageChanged={setNewsCurrentPageHandler}/>
            {articles.map(a => {
                return <NewsItem article={a}/>
            })}
        </div>
    );
};

export default News;