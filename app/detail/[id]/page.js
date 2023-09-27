import { ObjectId } from 'mongodb';
import { connectDB } from '@/util/database.js';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import Markdown from './markdown';

// 수정 삭제 기능 추가 예정

export default async function Detail(props) {
    let session = await getServerSession(authOptions);

    let db = (await connectDB).db('readingHistory');
    let result = await db.collection('reviews').findOne({ _id: new ObjectId(props.params.id) });
    return (
        <div>
            <h4>상세페이지</h4>
            <form method="POST" action="/api/post/delete">
                <input name="id" defaultValue={props.params.id} />
                <button>삭제</button>
            </form>
            <h4>{result.title}</h4>
            <Markdown result={result} />
        </div>
    );
}
