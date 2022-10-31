import {newsReducer, setNewsCurrentPage} from "../news-reducer";

const initialState = {articles: [], currentPage: 1}
test("current page should be updated", () => {

    let newState = newsReducer(initialState, setNewsCurrentPage(2));
    expect(newState.currentPage).toBe(2);
})