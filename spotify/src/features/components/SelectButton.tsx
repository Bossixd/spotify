import "./SelectButton.css";

interface Props {
    title: string;
    callback?: (() => void);
}

function SelectButton({ title, callback = (() => {}) }: Props) {
    const id = "select-button-" + title;
    return (
        <button id={id} className="select-button" onClick={callback}>
            <div>{title}</div>
        </button>
    );
}

export default SelectButton;
