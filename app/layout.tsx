import './globals.css';
import React from "react";

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
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}