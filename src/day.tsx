import React from "react"
import { currentDayOfWeek } from "./logic/calendar"

interface DayProps {
    day: string
}

export const Day = (props: DayProps) => {
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
