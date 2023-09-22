import { connectDB } from '@/util/database';
import { signIn, signOut } from 'next-auth/react';
import Login from './login';

export default async function Home() {
    // const client = await connectDB;
    // const db = client.db("forum");
    // let result = await db.collection("post").find().toArray();

    // console.log(result);

    return (
        <main>
            <div>hello</div>

            <Login />
        </main>
    );
}
