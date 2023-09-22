import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';

export default async function Profile() {
    let session = await getServerSession(authOptions);
    console.log(session);
    return (
        <div>
            <p>profile</p>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
        </div>
    );
}
