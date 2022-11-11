import {ActionType} from "../../app/redux-store";
import {ArticleType, newsAPI} from "./news-api";
import {setGlobalError} from "../../app/app-reducer";

const SET_NEWS_CURRENT_PAGE = "NEWS/SET_NEWS_CURRENT_PAGE";
const GET_TOP_NEWS = "NEWS/GET_TOP_NEWS";



const initialState = {
    currentPage: 1,
    articles: [] as Array<ArticleType>
}

type InitialStateType = typeof initialState;

export const newsReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_NEWS_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}
        case GET_TOP_NEWS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setArticles = (articles: Array<ArticleType>) => {
    return ({type: GET_TOP_NEWS, payload: {articles}} as const)
}
export const setNewsCurrentPage = (currentPage: number) => {
    return {type: SET_NEWS_CURRENT_PAGE, payload: {currentPage}} as const
};

export const getTopNews = (currentPage: number) => async (dispatch: any) => {
    try {
        const response = await newsAPI.getNews(currentPage);
        dispatch(setArticles(response.data.articles));
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}