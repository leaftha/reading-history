'use client';

import { signOut } from 'next-auth/react';
import classese from './deleteUser.module.css';

export default function DeleteUser({ session }) {
    return (
        <form className={classese.main} method="POST" action="/api/auth/delete">
            <input className={classese.none} type="text" name="email" defaultValue={session.user.email} />

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
