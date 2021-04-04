import React, { useState } from "react";
import styles from "./Collapsable.module.css";

type Props = {
    header: React.ReactNode;
    children: React.ReactNode;
};

export default function Collapsable({ header, children }: Props) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button className={styles.button} onClick={() => setOpen(!isOpen)}>
                {header}
            </button>
            {isOpen ? children : null}
        </>
    );
}
