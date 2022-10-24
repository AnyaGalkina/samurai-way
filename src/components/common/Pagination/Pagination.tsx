import React, {useState} from "react";
import {Page} from "./Page/Page";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


type PropsType = {
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
}

const Pagination: React.FC<PropsType> = ({currentPage, onPageChanged}) => {
    const totalItemsCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount);
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize);
    const portionSize = useSelector<AppStateType, number>(state => state.usersPage.portionSize);
    const [portionNumber, setPortionNumber] = useState(1);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize+1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let pages: Array<number> = [];

    const onLeftClickHandler = () => {
        setPortionNumber(portionNumber - 1);
        onPageChanged(leftPortionPageNumber-portionSize);
    }
    const onRightClickHandler = () => {
        setPortionNumber(portionNumber + 1);
        onPageChanged(rightPortionPageNumber+1);
    }

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    console.log(currentPage);
    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={onLeftClickHandler}>ᐊ</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <Page key={p} page={p}
                              onPageChanged={onPageChanged}
                              currentPage={currentPage}
                        />)
                })
            }
            {portionCount > portionNumber &&
                <button onClick={onRightClickHandler}>ᐅ</button>
            }
        </div>

    );
};

export default Pagination;