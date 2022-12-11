import React, { useContext } from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingContext } from '../../../context/settings.context';

function CountdownAnimation({key = 1, timer = 20, animate = true, children}) {
    const {stopTimer} = useContext(SettingContext);
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer}
            colors= {['ivory', 0.33]}
            strokeWidth={6}
            trailStrokeWidth={7}
            trailColor="#00000033"
            size={360}
            onComplete={ () => {stopTimer()}}
        >
            {children}
        </CountdownCircleTimer>
    );
}

export default CountdownAnimation;