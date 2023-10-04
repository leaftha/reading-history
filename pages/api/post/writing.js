import { connectDB } from '@/util/database';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.title != '' && req.body.main != '') {
            let db = (await connectDB).db('readingHistory');
            await db.collection('reviews').insertOne(req.body);
            res.status(200).redirect(302, '/reviews');
        } else {
            res.status(500).json('빈칸존재');
        }
    }
}
