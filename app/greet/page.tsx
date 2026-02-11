'use client';
import React from 'react';
import { useRef } from 'react';

const Welcome = () => {
    const tryAgainDialog = useRef<HTMLDialogElement>(null);
    const closeTryAgain = () => tryAgainDialog.current?.close();
    async function showTryAgainDialog() {
        tryAgainDialog.current?.showModal();
    }
    return (
        <>
            <dialog ref={tryAgainDialog} className="greetings">
                <h2>Pretty Please 🥺🥺</h2>
                <img src="/dudu-cry.gif" alt="dudu cry"/>
                <p>Please say Yes 🥺🥺</p>
                <button onClick={closeTryAgain} className="submit">GO BACK!</button>
            </dialog>
            <img src="/dudu-arrow.gif" alt="dudu arrow"/>
            <h3>Will You be my Valentine?</h3>
            <h3>🥺👉👈</h3>
            <form action="">
                <button className="yes">
                    YES
                </button>
            </form>
            <form action={showTryAgainDialog}>
                <button className="no">
                    NO
                </button>
            </form>
        </>
    );
}

export default Welcome;