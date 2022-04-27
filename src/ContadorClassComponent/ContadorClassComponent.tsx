import React from "react";

interface IProps {
    seconds: number;
}

export const ContadorClassComponent = (content: IProps): JSX.Element => {
    const [seconds, setSeconds] = React.useState(0);

    function contador() {
        setSeconds(seconds + 1)
    }
    return (
        <div>
            <p>{seconds}</p>
            <button onClick={contador}>A sumá!</button>
        </div>
    )
}

/*export const ContadorClassComponent = (seconds: IProps): number => {
    const [second, setSecond] = React.useState(0);
    return setSecond(second + 1);
}*/