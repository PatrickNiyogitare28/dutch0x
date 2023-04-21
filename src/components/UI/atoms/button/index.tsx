import React from 'react';

interface Props {
    label: string;
    bg?: string
}

export default function Button ({bg, label}: Props) {
    return (
        <button className="cursor-pointer px-4 py-2 flex items-center rounded-[8px] border-white border-[0.5px] transition duration-300 ease-in-out transform hover:scale-105" 
         style={{
            backgroundColor: bg ? bg : 'transparent',
            fontWeight: bg ? 'bold' : 'lighter'
         }}
        >
            <label className="text-[0.8rem] text-white cursor-pointer"
             style={{
                color: bg ? 'black' : 'white'
             }}
            >{label}</label>
        </button>
    )
}
