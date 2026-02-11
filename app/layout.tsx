import './globals.css';
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

// 1. Import Parisienne from Google Fonts
import {Kaushan_Script} from 'next/font/google';

// 2. Configure the font
const kaushanScript = Kaushan_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#000000',
}

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/* We removed the <link> tags because next/font handles it now! */}
        <body className={kaushanScript.className}>
        <div className="container">
            <main>{children}</main>
        </div>
        <SpeedInsights />
        </body>
        </html>
    )
}