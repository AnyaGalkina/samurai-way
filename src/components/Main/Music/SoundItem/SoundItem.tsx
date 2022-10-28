import React from "react";
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
                <Button
                    icon={<PlayCircleOutlined/>}
                    onClick={() => {
                        Howler.stop();
                        sound.src.play();
                    }}>
                </Button>
                {/*<Button icon={<PauseCircleOutlined/>}*/}
                {/*        onClick={() => {*/}
                {/*            sound.src.pause()*/}
                {/*        }}>*/}
                {/*    */}
                {/*</Button>*/}
                <Button
                    icon={<PoweroffOutlined />}
                    onClick={() => {
                    sound.src.stop()
                }}></Button>
            </div>
        </div>
    );
};
