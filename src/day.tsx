import React, { useState } from "react"
import { currentDayOfWeek } from "./logic/calendar"

interface DailyTracks {
    [trackid: string]: boolean
}

interface DayProps {
    day: string
}

export const Day = (props: DayProps) => {
    const [state, setState] = useState({} as DailyTracks);

    const classes = ["day-box"]
    if(props.day == currentDayOfWeek) {
        classes.push("today")
    }

    return (
        <div className={classes.join(" ")} key={props.day} >
            {props.day}
        </div>
    )
}
