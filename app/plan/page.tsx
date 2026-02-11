'use client';
import {useEffect, useRef} from "react";
import React from 'react'

const Page = () => {
    const planDialog = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        planDialog.current?.showModal();
    }, []);
    const closePlanDialog = () => planDialog.current?.close();
    return (
        <>
            <dialog ref={planDialog} className="greetings">
                <img src="/dudu-thingking-2.gif" alt="dudu thinking"/>
                <h3>So here's the plan</h3>
                <button onClick={closePlanDialog} className="submit">
                    NEXT
                </button>
            </dialog>
        </>
    )
}
export default Page
