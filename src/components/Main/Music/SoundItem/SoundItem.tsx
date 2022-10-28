import React, {useState} from "react";
import {Button} from "antd";
import styles from "./SoundItem.module.css";
import {PlayCircleOutlined, PauseCircleOutlined, PoweroffOutlined} from "@ant-design/icons";
//@ts-ignore
import {Howl, Howler} from "howler";

export type SoundsType = {
    author: string; title: string; src: any; img: string
}
type PropsType = {
    sound: SoundsType
}

export const SoundItem = ({sound}: PropsType) => {
    const [soundStatus, setSoundStatus] = useState<soundStatusType>("off");
    type soundStatusType = "play" | "pause" | "off";

    const onPlayClickHandler = () => {
        if (soundStatus === "pause") {
            sound.src.play();
            setSoundStatus("play");
        } else {
            Howler.stop();
            sound.src.play();
            setSoundStatus("play");
        }
    }

    const onPauseClickHandler = () => {
        setSoundStatus("pause");
        sound.src.pause()
    }

    const onStopClickHandler = () => {
        sound.src.stop()
        setSoundStatus("off");
    }

    return (
        <div className={styles.soundContainer}>
            <img alt={"album title"} src={sound.img} style={{width: "300px", height: " 300px"}}/>
            <div>
                <span>{sound.title}</span>
                <div>
                    <span style={{color: "grey"}}>{sound.author}</span>
                </div>
            </div>
            <div>
                <Button icon={<PlayCircleOutlined/>}
                        onClick={onPlayClickHandler}>
                </Button>
                <Button icon={<PauseCircleOutlined/>}
                        onClick={onPauseClickHandler}>

                </Button>
                <Button icon={<PoweroffOutlined/>}
                        onClick={onStopClickHandler}>
                </Button>
            </div>
        </div>
    );
};
