import React, { useState } from "react";
import styles from "./Collapsable.module.css";
import * as mixpanel from "mixpanel-browser";

type Props = {
    name: string;
    header: React.ReactNode;
    children: React.ReactNode;
};

export default function Collapsable({ name, header, children }: Props) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button
                className={styles.button}
                onClick={() => {
                    mixpanel.track("Toggle timetable", {
                        isOpenNow: !isOpen,
                        name: name,
                    });
                    setOpen(!isOpen);
                }}
            >
                {header}
            </button>
            {isOpen ? children : null}
        </>
    );
}
