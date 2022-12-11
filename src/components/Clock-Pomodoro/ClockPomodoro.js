import React, {useState, useEffect} from 'react';
import "./ClockPomodoro.css"
import Moment from 'react-moment'
import moment from 'moment';
function ClockPomodoro() {
    const [clock, setClock] = useState('');
    const [sec, setSec] = useState('');

    useEffect(() => {
        setInterval(() => {
            setClock(moment().format('HH:mm'))
            setSec(moment().second())
        },1000)
    },[])
    return (
        <div className="time-container">
            <div className="time-dashboard">
                <div className="clock">{clock}<sup className="seconds">{sec}</sup></div>
                <div>
                    <Moment className="date" format="MMMM Mo"/>
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
 
}

export default ClockPomodoro;