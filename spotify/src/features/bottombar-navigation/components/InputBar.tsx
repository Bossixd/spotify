import "./Bottombar.css";

import { useState } from "react";

interface props {
    style: String;
    value?: number;
    setValue?: (volume: number) => void;
}

function InputBar({ style, value, setValue }: props) {
    return (
        <input
            className="input-bar"
            type="range"
            min="0"
            max="100"
            step="1"
            // onChange={(e) => {
            //     if (setValue)
            //         setValue(parseInt(e.target.value));
            // }}
            value={value}
            style={style as any}
        />
    );
}

export default InputBar;
