'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import './loginbutten.model.css';
export default function Login({ session }) {
    return (
        <div>
            {session ? (
                <button className="styled-button" onClick={() => signOut()}>
                    로그아웃버튼
                </button>
            ) : (
                <div>
                    <button className="styled-button" onClick={() => signIn()}>
                        로그인버튼
                    </button>
                    <Link href="/register">회원가입</Link>
                </div>
            )}
        </div>
    );
}
