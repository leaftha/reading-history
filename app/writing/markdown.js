'use client';

import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';

export default function Markdown({ session }) {
    const [value, setValue] = useState('');
    const [privates, setPrivates] = useState(false);

    useEffect(() => {}, [privates]);

    return (
        <form action="/api/post/writing" method="POST">
            <input name="email" defaultValue={session.user.email} readOnly={true} />
            <label>제목</label>
            <input name="title" />
            <select
                onChange={() => {
                    setPrivates(!privates);
                }}
                value={privates}
            >
                <option value={false} key="false">
                    비공개
                </option>
                <option value={true} key="true">
                    공개
                </option>
            </select>
            <input name="private" value={privates} readOnly={true} />

            <div data-color-mode="light">
                <MDEditor height={200} value={value} onChange={setValue} />
            </div>
            <textarea name="main" defaultValue={value}></textarea>
            <button type="submit">버튼</button>
        </form>
    );
}
