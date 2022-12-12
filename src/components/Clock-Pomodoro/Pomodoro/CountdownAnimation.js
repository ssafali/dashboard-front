import React, { useContext } from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingContext } from '../../../context/settings.context';

function CountdownAnimation({key, timer, animate, children}) {
    const {stopAnimate} = useContext(SettingContext);
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors= {['ivory', 0.1]}
            strokeWidth={6}
            trailStrokeWidth={7}
            trailColor="#00000033"
            size={360}
            onComplete={ () => {stopAnimate()}}
        >
            {children}
        </CountdownCircleTimer>
    );
}

export default CountdownAnimation;