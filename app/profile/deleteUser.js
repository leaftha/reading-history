'use client';

import { signOut } from 'next-auth/react';

export default function DeleteUser({ session }) {
    return (
        <form method="POST" action="/api/auth/delete">
            <input type="text" name="email" defaultValue={session.user.email} />

            <button
                onClick={() => {
                    signOut();
                }}
            >
                회원탈퇴
            </button>
        </form>
    );
}
