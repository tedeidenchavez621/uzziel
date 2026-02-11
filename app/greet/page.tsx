'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    return (
        <>
            <img src="/dudu-arrow.gif" alt="dudu arrow"/>
            <button type="button" onClick={() => router.back()}>
                Go Back
            </button>
        </>
    );
}

export default Page;