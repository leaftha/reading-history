import { ObjectId } from 'mongodb';
import { connectDB } from '@/util/database.js';
import Markdown from './markdown';

export default async function Detail(props) {
    let db = (await connectDB).db('readingHistory');
    let result = await db.collection('reviews').findOne({ _id: new ObjectId(props.params.id) });
    console.log(result);
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <Markdown result={result} />
        </div>
    );
}
