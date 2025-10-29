'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function getUsername() {
    const cookieStore = await cookies();
    return cookieStore.get('username')?.value;
}

export async function deleteCookie(name: string) {
    const cookieStore = await cookies();
    cookieStore.delete(name);
    cookieStore.delete('accessToken');
    revalidatePath('/');
    return true;
}