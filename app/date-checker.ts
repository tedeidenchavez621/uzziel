'use server';

import { redirect } from 'next/navigation';

export async function checkDate(FormData: FormData) {
    const inputDate = FormData.get('anniversaryDate');

    if(inputDate === '12-24-2025') {
        redirect('/greet')
    }
}
