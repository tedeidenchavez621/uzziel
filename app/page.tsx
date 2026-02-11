"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Changed this

export default function Page() {
    const router = useRouter(); // Initialize router

    // behavior for welcome dialog
    const welcomeDialog = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        welcomeDialog.current?.showModal();
    }, []);
    const closeWelcome = () => welcomeDialog.current?.close();

    // behavior for try again dialog
    const tryAgainDialog = useRef<HTMLDialogElement>(null);
    const closeTryAgain = () => tryAgainDialog.current?.close();

    // input checker for validation
    const [inputValue, setInputValue] = useState("");

    // button handler for input
    const handleNumberClick = (num:string) => {
        setInputValue(prev => prev + num);
    };
    function clearNumbers() {
        setInputValue("");
    }

    async function checkDate(formData: FormData) {
        const inputDate = formData.get('anniversaryDate');

        if(inputDate === '12-24-2025') {
            router.push('/greet');
        } else {
            clearNumbers();
            tryAgainDialog.current?.showModal();
        }
    }


    return (
        <>
            <dialog ref={welcomeDialog} className="greetings">
                <h2>Advanced Happy</h2> <h2>Valentines Uzziel! ❤️</h2>
                <img src="/dudu-hearts-2.gif" alt="dudu hearts"/>
                <p>Please enter our anniversary to continue!</p>
                <button onClick={closeWelcome} className="submit">CONTINUE</button>
            </dialog>

            <dialog ref={tryAgainDialog} className="greetings">
                <h2>Y️ou don't remember??</h2>
                <img src="/dudu-crying-2.gif" alt="dudu cry"/>
                <p>Please try again!</p>
                <button onClick={closeTryAgain} className="submit">TRY AGAIN</button>
            </dialog>

            <img src="/dudu-hearts.gif" alt="dudu hearts"/>
            <p>Do it in this format: mm-dd-yyyy ❤️</p>

            <form action={checkDate} className="anniversary" id="anniversary">
                <input type="text" id="anniversary-date" value={inputValue} name="anniversaryDate" readOnly />
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