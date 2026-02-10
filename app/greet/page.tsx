'use client';
import React from 'react';
// 1. Change 'next/router' to 'next/navigation'
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter(); // 2. This now works correctly in the App Router

    return (
        <>
            <div>Greeting Page! 🎉</div>

            <button type="button" onClick={() => router.back()}>
                Go Back
            </button>
        </>
    );
}

export default Page;