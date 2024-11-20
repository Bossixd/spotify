const number_to_string = (number: number) => {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

export default number_to_string;