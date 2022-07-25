import React from "react";
import preloader from "../../../assets/images/preloader.gif";

const Preloader: React.FC = () => {
    return (
        <img src={preloader} alt={"preloader"}></img>
    );
};

export default Preloader;