'use client';

import MDEditor from '@uiw/react-md-editor';

export default function Markdown({ result }) {
    console.log(result);
    return (
        <div className="markdownDiv" data-color-mode="light" style={{ padding: 15 }}>
            <MDEditor.Markdown style={{ padding: 10 }} source={result.main} />
        </div>
    );
}
