'use client';
import React from 'react'
import Link from 'next/link'

const Celebrate = () => {
    return (
        <>
            <img src="/dudu-happy-2.gif" alt="happy dudu"/>
            <h2>YEY! I love you 💖💗🥰💞</h2>
            <br />
            <Link href="/plan">
                <button className="submit">
                    CONTINUE
                </button>
            </Link>

        </>
    )
}
export default Celebrate
