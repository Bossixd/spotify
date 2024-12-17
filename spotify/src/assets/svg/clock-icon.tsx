function ClockIcon() {
    return (
        <svg
            className="clock-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            role="img"
            viewBox="0 0 16 16"
        >
            <path className="clock-icon" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
            <path className="clock-icon" d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
        </svg>
    );
}

export default ClockIcon;
