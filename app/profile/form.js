'use client';
import { useEffect, useState } from 'react';

export default function Form({ setData }) {
    const [selected, setSelected] = useState('소설');
    const [tasteList, setTasteList] = useState([]);
    const selectList = ['소설', '과학', '시사', '시', '자기개발'];

    const handleSelect = (e) => {
        if (e.target.value != '') {
            setSelected(e.target.value);
        }
    };

    const addTasteList = () => {
        if (!tasteList.includes(selected)) {
            setTasteList([selected, ...tasteList]);
        } else {
            alert('이미 추가된 취양');
        }
    };

    setData(tasteList);

    return (
        <div>
            <select onChange={handleSelect} value={selected}>
                {selectList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
            <button type="submit" onClick={addTasteList}>
                추가
            </button>
            {tasteList.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
        </div>
    );
}
