import React from "react";
import styles from "./Pagination.module.css";


type PropsType = {
    currentPage: number;
    onPageChanged: (totalUsersCount: number) => void;
}

const Pagination: React.FC<PropsType> = ({currentPage, onPageChanged}) => {
    let pagesCount = 10;
    let pages: Array<number> = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            {pages.map(p => {
                const onPageClickHandler = () => {onPageChanged(p)};

                return (
                    <span
                        key={p}
                        className={`${currentPage === p ? styles.selectedPage : styles.page}`}
                        onClick={onPageClickHandler}
                    >{p}</span>)
            })}
        </div>

    );
};

export default Pagination;