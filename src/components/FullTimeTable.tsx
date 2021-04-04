import React, { useEffect, useRef, useMemo } from "react";
import { timeTable } from "../services/timetable";
import styles from "./FullTimeTable.module.css";

type Props = {
    stop: keyof typeof timeTable.weekdays;
    selectedTime?: string;
};

export default function FullTimeTable({ stop, selectedTime }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const weekdays = useMemo(
        () => moveFirstLast([...timeTable.weekdays[stop]]),
        [stop]
    );
    const weekends = useMemo(
        () => moveFirstLast([...timeTable.weekends[stop]]),
        [stop]
    );

    useEffect(() => {
        if (ref.current) {
            ref.current.querySelectorAll(".is-selected").forEach((el) =>
                el.scrollIntoView({
                    behavior: "auto",
                    block: "nearest",
                    inline: "start",
                })
            );
        }
    }, []);

    return (
        <div ref={ref} className={styles.container}>
            <h4 className="App-ctt-heading">Vardagar</h4>
            <div className="App-completeTimeTable">
                {weekdays.map((time) => (
                    <span
                        key={time}
                        className={
                            "App-timeTag " +
                            (time === selectedTime ? "is-selected" : "")
                        }
                    >
                        {time}
                    </span>
                ))}
            </div>
            <h4 className="App-ctt-heading">Helger</h4>
            <div className="App-completeTimeTable">
                {weekends.map((time) => (
                    <span
                        key={time}
                        className={
                            "App-timeTag " +
                            (time === selectedTime ? "is-selected" : "")
                        }
                    >
                        {time}
                    </span>
                ))}
            </div>
        </div>
    );
}

function moveFirstLast<T>(arr: T[]) {
    arr.push(arr.shift()!);
    return arr;
}
