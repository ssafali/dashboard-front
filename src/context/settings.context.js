import React, { createContext, useState } from 'react';

export const SettingContext = createContext();

const SettingsContextProvider = (props) => {
    const [pomodoro, setPomodoro] = useState(0);
    const [executing, setExecuting] = useState({});
    const [startAnimate, setStartAnimate] = useState(false);


    // const audio = new Audio(NotificationSound);


    // import NotificationSound from '../../../assets/misc/success.mp3'
    // function playAudio() {
    //     return audio.play();
    //   }

    //   if({pomodoro} === 2) {
    //     playAudio();
    //   }




    const startTimer = () => {
        setStartAnimate(true);
    }

    const pauseTimer = () => {
        setStartAnimate(false);
    }

    const stopTimer = () => {
        setStartAnimate(false);
    }

    const settingButton = () => {
        setExecuting({});
        setPomodoro(0);
    }

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimer(executing);
    }

    const updateExecute = (updatedSettings) => {
        setExecuting(updatedSettings)
        setTimer(updatedSettings)
    }

    const stopAnimate = () => {
        setStartAnimate(false)
    }

    const setTimer = evaluate => {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
            default:
                setPomodoro(0);
                break;
        }
    }

    const children = ({remainingTime}) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${minutes}:${seconds}`
    }

    return (
        <SettingContext.Provider 
        value={{ 
            stopTimer, 
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            startTimer,
            pauseTimer,
            settingButton,
            setCurrentTimer,
            stopAnimate,
            children
            }}>
            {props.children}
        </SettingContext.Provider>

    );
}

export default SettingsContextProvider;