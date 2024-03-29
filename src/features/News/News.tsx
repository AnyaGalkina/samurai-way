import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {ArticleType} from "./news-api";
import {NewsItem} from "./NewsItem/NewsItem";
import {getTopNews, setNewsCurrentPage} from "./news-reducer";
import Pagination from "../../common/components/Pagination/Pagination";
import {Title} from "../../common/components/Title/Title";

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