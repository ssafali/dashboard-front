import React from 'react';
import "./PomodoroTimer.css"
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import PomodoroComponent from './PomodoroComponent';
import CountdownAnimation from './CountdownAnimation';
import  SettingContext from "../../../context/settings.context";

import Button from './Button';
import { useContext } from 'react';

function PomodoroTimer(props) {
    const { pomodoro,stopTimer, executing, setCurrentTimer, settingButton, startAnimate, startTimer, pauseTimer, children } = useContext(SettingContext)

    return (
        <div className="container">
            <h1>Pomodoro</h1>
            {pomodoro == 0 ?
                <PomodoroComponent /> :
                <>
                    <ul className='labels'>
                        <li>
                            <Button
                                title="Work"
                                activeClass={executing.active === 'work' ? 'active-label': undefined}
                                _callback={() => setCurrentTimer('work')}
                            />
                        </li>

                        <li>
                            <Button
                                title="Short Break"
                                activeClass={executing.active === 'short' ? 'active-label': undefined}
                                _callback={() => setCurrentTimer('short')}
                            />
                        </li>

                        <li>
                            <Button
                                title="Long Break"
                                activeClass={executing.active === 'long' ? 'active-label': undefined}
                                _callback={() => setCurrentTimer('long')}
                            />
                        </li>
                    </ul>
                    <Button title="Settings" _callback={settingButton}/>
                    <div className='time-container'>
                        <div clasName="time-wrapper">
                            <CountdownAnimation
                                key={pomodoro}
                                tomer={pomodoro}
                                animate={startAnimate}
                                >
                                {children}
                            </CountdownAnimation>
                        </div>
                    </div>
                    <div className='button-wrapper'>
                        <Button title="Start" className={!startAnimate && 'active'} _callback={startTimer}/>
                        <Button title="Start" className={startAnimate && 'active'} _callback={pauseTimer}/>

                    </div>
                </>
            }
        </div>
    );
}

export default PomodoroTimer;