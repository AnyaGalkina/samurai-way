import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTopNews} from "../../../redux/news-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {ArticlesType} from "../../../api/news-api";
import {Button, Divider} from "antd";
import styles from "./News.module.css";
import {RightOutlined, ShareAltOutlined} from "@ant-design/icons";

const News = () => {
    const dispatch = useDispatch();
    const articles = useSelector<AppStateType, Array<ArticlesType>>(state => state.newsPage.articles);

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
            <h1>📰 <h1>Top TechCrunch news</h1></h1>
            {articles.map(a => {
                return (
                    <div>
                        <h2>{a.title}</h2>
                        <div className={styles.newsBlock}>
                            <img className={styles.img} src={a.urlToImage} alt={"article"}/>
                            <div className={styles.articleDetails}>
                                <p>{a.description}</p>
                                <Button
                                    style={{
                                        // backgroundColor: "#149AC9"
                                        backgroundColor: "#ffb549",
                                        borderColor: "#ffb549",
                                        color: "white"
                                    }}
                                    // icon={}
                                    type="primary"
                                ><a href={a.url}>Read more

                                    <RightOutlined/></a>
                                </Button>
                                <div>
                                    <Button style={{marginTop: "30px"}}
                                        type={"text"}
                                            shape={"circle"}
                                            icon={<ShareAltOutlined/>}
                                    >
                                    </Button>
                                </div>
                            </div>

                        </div>
                        {/*<a href={a.url}>more info</a>*/}
                        <Divider/>
                    </div>
                )
            })}

        </div>
    );
};

export default News;