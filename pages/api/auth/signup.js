import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.email != '' && req.body.name != '' && req.body.password != '') {
            let db = (await connectDB).db('readingHistory');
            let result = await db.collection('user_cred').find({ email: req.body.email }).toArray();
            if (result.length === 0) {
                const hash = await bcrypt.hash(req.body.password, 10);
                req.body.password = hash;
                await db.collection('user_cred').insertOne(req.body);
                res.status(200).redirect(302, '/');
            } else {
                res.status(500).json('같은 이메일 존재');
            }
        } else {
            res.status(500).json('빈칸존재');
        }
    }
}
