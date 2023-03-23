import React from "react";
import styles from "./NewsItem.module.css";
import {Button, Divider, message, Popconfirm} from "antd";
import {RightOutlined, ShareAltOutlined} from "@ant-design/icons";
import {ArticleType} from "../news-api";

type PropsType = {
    article: ArticleType
}


export const NewsItem = ({article}: PropsType) => {


    const confirm = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        navigator.clipboard.writeText(article.url)
        message.success("Copied");
    };

    return (
        <div>
            <h2>{article.title}</h2>
            <div className={styles.newsBlock}>
                <img className={styles.img} src={article.urlToImage} alt={"article"}/>
                <div className={styles.articleDetails}>
                    <p>{article.description}</p>
                    <Button
                        style={{backgroundColor: "#ffb549", borderColor: "#ffb549", color: "white"}}
                        type="primary">
                        <a href={article.url}>Read more<RightOutlined/></a>
                    </Button>
                    <div>
                        <Popconfirm
                            title="Copy link to share with friends"
                            //@ts-ignore
                            onConfirm={confirm}
                            okText="Copy"
                            cancelText="X">
                            <Button style={{marginTop: "30px"}}
                                    type={"text"}
                                    shape={"circle"}
                                    icon={<ShareAltOutlined/>}>
                            </Button>
                        </Popconfirm>
                    </div>
                </div>
            </div>
            <Divider/>
        </div>
    );
};

