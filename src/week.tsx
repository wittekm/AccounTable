import React from "react";
import { daysOfWeek } from "./logic/calendar";
import { Day } from "./day";

export function Week(props: {}) {
    return (
        <div className="week-view-container">
            {daysOfWeek.map(day => (
                <Day day={day} />
            ))}
        </div>
    )
}