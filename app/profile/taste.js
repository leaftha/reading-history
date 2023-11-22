'use client';

import { useState } from 'react';
import Form from './form';
import classes from './taste.module.css';

export default function Taste({ session }) {
    const [modal, setModal] = useState(false);

    return (
        <div className={classes.main}>
            <h1
                className={classes.btn}
                onClick={() => {
                    setModal(true);
                }}
            >
                취양 추가
            </h1>
            {modal && <Form session={session} />}
        </div>
    );
}
