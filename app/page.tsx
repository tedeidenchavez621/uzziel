"use client";
import { useState, useEffect, useRef } from "react";
import { checkDate } from './date-checker';

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const dialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);
    const closeModal = () => dialogRef.current?.close();

    const handleNumberClick = (num:string) => {
        setInputValue(prev => prev + num);
    };
    function clearNumbers() {
        setInputValue("");
    }
    return (
        <>
            <dialog ref={dialogRef} className="greetings">
                <h2>HAPPY VALENTINES UZZIEL! ❤️</h2>
                <p>Please enter our special date to continue.</p>
                <button onClick={closeModal}>CONTINUE</button>
            </dialog>

            <img src="/dudu-hearts.gif" alt=""/>
            <form action={ checkDate } className="anniversary" id="anniversary" >
                <input type="text" id="anniversary-date" value={inputValue} name="anniversaryDate"/>
                <button type="button" id="one" onClick={() => handleNumberClick("1")}>1</button>
                <button type="button" id="two" onClick={() => handleNumberClick("2")}>2</button>
                <button type="button" id="three" onClick={() => handleNumberClick("3")}>3</button>
                <button type="button" id="four" onClick={() => handleNumberClick("4")}>4</button>
                <button type="button" id="five" onClick={() => handleNumberClick("5")}>5</button>
                <button type="button" id="six" onClick={() => handleNumberClick("6")}>6</button>
                <button type="button" id="seven" onClick={() => handleNumberClick("7")}>7</button>
                <button type="button" id="eight" onClick={() => handleNumberClick("8")}>8</button>
                <button type="button" id="nine" onClick={() => handleNumberClick("9")}>9</button>
                <button type="button" id="zero" onClick={() => handleNumberClick("0")}>0</button>
                <button type="button" id="clear" onClick={() => clearNumbers()}>CLEAR</button>
                <button type="button" id="dash" onClick={() => handleNumberClick("-")}>-</button>
            </form>
            <div className="submit-container">
                <button form="anniversary" className="submit">Submit</button>
            </div>
        </>
    )
}