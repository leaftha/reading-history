import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import Markdown from './markdown';

export default async function Writing() {
    let session = await getServerSession(authOptions);

    return (
        <div>
            <h4>글작성</h4>

            <Markdown session={session} />
        </div>
    );
}
