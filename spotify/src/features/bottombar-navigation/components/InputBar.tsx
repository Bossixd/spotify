import "./Bottombar.css";

import { useState } from "react";

interface props {
    style: String;
    setValue: (volume: number) => void;
}

function InputBar({style, setValue}: props) {
    return (
        <input
            className="input-bar"
            type="range"
            min="0"
            max="100"
            step="1"
            onChange={(e) => {
                setValue(parseInt(e.target.value));
            }}
            style={style as any}
        />
    );
}

export default InputBar;
