import React from "react";
//@ts-ignore
import {Howl, Howler} from "howler";
//@ts-ignore
import purrpleCat from "../../assets/audio/purrple-cat-pillars-of-creation.mp3";
//@ts-ignore
import acoustic from "../../assets/audio/happy-acoustic-guitar.mp3";
//@ts-ignore
import hipHopRock from "../../assets/audio/hip-hop-rock-beats-118000.mp3";
//@ts-ignore
import sunshine from "../../assets/audio/the-sunshine-123546.mp3";
//@ts-ignore
import energetic from "../../assets/audio/powerful-stylish-stomp-rock-lets-go-114255.mp3";
//@ts-ignore
import winter from "../../assets/audio/the-winter-fall-by-prabajithk-122683.mp3";
import universe from "../../assets/images/musicImg/universe.png";
import space from "../../assets/images/musicImg/space.png";
import extreme from "../../assets/images/musicImg/extreme.jpeg";
import advanture from "../../assets/images/musicImg/advanture.png";
import hipHop from "../../assets/images/musicImg/hipHop.png";
import robot from "../../assets/images/musicImg/robot.png";
import styles from "./Music.module.css";
import {SoundItem, SoundsType} from "./SoundItem/SoundItem";
import {Title} from "../../common/components/Title/Title";

const Music = () => {

    const soundChill = new Howl({
        src: [purrpleCat]
    });
    const soundRock = new Howl({
        src: [hipHopRock]
    });
    const soundHappy = new Howl({
        src: [sunshine]
    });
    const soundEnergetic = new Howl({
        src: [energetic]
    });
    const soundAcoustic = new Howl({
        src: [acoustic]
    });
    const soundWinter = new Howl({
        src: [winter]
    });

    const sounds: Array<SoundsType> = [
        {author: "Purple Cat", title: "Pillars Of Creation", src: soundChill, img: universe},
        {author: "QubeSounds", title: "Hip Hop Rock Beats", src: soundRock, img: hipHop},
        {author: "MarkJuly", title: "Powerful Stylish Stomp Rock (Lets Go)", src: soundEnergetic, img: extreme},
        {author: "MildRelaxation", title: "The Winter Fall by PrabajithK", src: soundWinter, img: robot},
        {author: "DayFox", title: "The Sunshine", src: soundHappy, img: advanture},
        {author: "Music Unlimited", title: "Happy acoustic", src: soundAcoustic, img: space},
    ]
    return (
        <div>
            <Title title={"♪♪♪ Music ♪♪♪"}/>
            <div className={styles.soundsContainer}>
                {sounds.map(s => {
                    return <SoundItem sound={s}/>
                })}
            </div>
        </div>
    );
};

export default Music;