'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Login({ session }) {
    return (
        <div>
            {session ? (
                <button
                    onClick={() => {
                        signOut();
                    }}
                >
                    로그아웃버튼
                </button>
            ) : (
                <div>
                    <button
                        onClick={() => {
                            signIn();
                        }}
                    >
                        로그인버튼
                    </button>
                    <Link href="/register">회원가입</Link>
                </div>
            )}
        </div>
    );
}
