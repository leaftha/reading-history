import Link from 'next/link';
import './globals.css';
import Login from './login';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import "./reset.css"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
    let session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={inter.className}>
                <nav className='navbar'>
                    <Link href="/">홈</Link>
                    <Link href="/reviews">서평</Link>
                    <Link href="/commend">추천 도서</Link>
                    <Link href="/profile">프로필</Link>
                    <Link href="/debate">토론</Link>

                    <Login session={session} />
                </nav>
                {children}
            </body>
        </html>
    );
}
