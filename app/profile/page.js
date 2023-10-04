import { connectDB } from '@/util/database';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import Taste from './taste';
import NotAuth from '../notauth';

export default async function Profile() {
    let session = await getServerSession(authOptions);
    if (!session) {
        return <NotAuth />;
    }
    const client = await connectDB;
    const db = client.db('readingHistory');

    let result = await db.collection('user_cred').find({ email: session.user.email }).toArray();

    let tastes = [...result[0].taste];
    return (
        <div>
            <p>profile</p>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
            <div>
                <h1>현재 취양</h1>
                {tastes ? tastes.map((item, idx) => <p key={idx}>{item}</p>) : '현재 없음'}
            </div>

            <Taste session={session} />
        </div>
    );
}
