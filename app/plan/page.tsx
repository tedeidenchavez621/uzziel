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
                image={<img src="/dudu-bike.gif" alt=""/>}
                date={
                    <>
                        <h3>FEB. 14, 2026</h3>
                        <p>12:00 - 12:30PM</p>
                    </>
                }
                description={
                    <p>I'll arrive at your place</p>
                }
            />
            <Card
                image={<img src="/dudu-bubu-eating.gif" alt="dudu-thinking"/>}
                date={
                    <>
                        <h3>FEB. 14, 2026</h3>
                        <p>1:00 - 2:00 PM</p>
                    </>
                }
                description={
                <p>We'll eat lunch at <b>La Berean's Cafe</b></p>
                }
            />
            <Card
                image={<img src="/DUDU-BUBU-HAPPY.gif" alt=""/>}
                date={
                    <>
                        <h3>FEB. 14, 2026</h3>
                        <p>2:30 - 3:30 PM</p>
                    </>
                }
                description={<p>Testing of Eirenia Scents  </p>}
            />
            <Card
                image={<img src="/dudu-bubu-spending-time.gif" alt=""/>}
                date={
                    <>
                        <h3>FEB. 14, 2026</h3>
                        <p>3:30 onwards spending time 💖💗🥰💞</p>
                    </>
                }
                description={
                    <>
                        <form action="/finish">
                            <button className="submit">CONTINUE</button>
                        </form>
                    </>
                }
            />
        </>
    )
}
export default Page
