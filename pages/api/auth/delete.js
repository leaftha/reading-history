import { connectDB } from '@/util/database';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const client = await connectDB;
        let db = (await connectDB).db('readingHistory');
        db.collection('user_cred').deleteMany({ email: req.body.email });
        db.collection('comment').deleteMany({ author: req.body.email });
        db.collection('reviews').deleteMany({ email: req.body.email });
    }
}
