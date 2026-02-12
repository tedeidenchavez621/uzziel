'use client';
import {useEffect, useRef} from "react";
import React from 'react'
import Card from "@/app/components/card";


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
            <Card
                image={<img src="/dudu-bubu-eating.gif" alt="dudu-thinking"/>}
                date={
                    <>
                        <h3>FEB. 14, 2026</h3>
                        <p>1:00 PM to 2:00 PM</p>
                    </>
                }
                description={
                <p>We'll eat lunch at <b>La Berean's Cafe</b></p>
                }
            />
            <Card
                image={<img src="/DUDU-BUBU-HAPPY.gif" alt=""/>}
                date={<h3> feb 14 2:30 PM - 3:00 PM</h3>}
                description={<p>Testing of Scents  </p>}
            />
        </>
    )
}
export default Page
