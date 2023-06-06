import { Console } from "console";
import { useEffect, useState } from "react";
import { on } from "stream";
import { text } from "stream/consumers";
import './calculator.css';

function MyCalCulatorApp(props: any) {

    const [display, setDisplay] = useState("");

    const onChangeHandler = (event: any) => {
        setDisplay(display.concat(event.target.name));
    }

    const inputcahngeHandle = (event: any) => {
        setDisplay(event.target.value);
    }

    const onChangeClear = (() => {
        setDisplay('');
    });

    const onchangebackspace = (() => {
        setDisplay(display.slice(0, -1));
    });

    const getResult = (() => {
        try {
            console.log({ display })
            setDisplay(eval(display).toString());

        } catch (err) {
            setDisplay("Error");
        }

    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getResult();
    };

    return (
        <>
            <div className="h2" id="heading">my Calculator</div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="inputtext" value={display} onChange={(event) => inputcahngeHandle(event)} />
                </form >

                <div className="keypad">
                    <button id="clear" onClick={onChangeClear} className="highlight">Clear</button>
                    <button id="backspace" onClick={onchangebackspace} className="highlight">C</button>
                    <button name="/" onClick={onChangeHandler} className="highlight">/</button>
                    <button name="7" onClick={onChangeHandler}>7</button>
                    <button name="8" onClick={onChangeHandler}>8</button>
                    <button name="9" onClick={onChangeHandler}>9</button>
                    <button name="*" className="highlight" onClick={onChangeHandler}>x</button>
                    <button name="4" onClick={onChangeHandler}>4</button>
                    <button name="5" onClick={onChangeHandler}>5</button>
                    <button name="6" onClick={onChangeHandler}>6</button>
                    <button name="-" onClick={onChangeHandler} className="highlight">-</button>
                    <button name="1" onClick={onChangeHandler}>1</button>
                    <button name="2" onClick={onChangeHandler}>2</button>
                    <button name="3" onClick={onChangeHandler}>3</button>
                    <button name="+" onClick={onChangeHandler} className="highlight">+</button>
                    <button name="0" onClick={onChangeHandler}>0</button>
                    <button name="." onClick={onChangeHandler}>.</button>
                    <button name="%" onClick={onChangeHandler} className="highlight">%</button>
                    <button id="result" name="=" onClick={getResult} className="highlight">=</button>
                </div>
            </div>
        </>
    );

}

export default MyCalCulatorApp;