import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(Get, Post) {
    if (Get.method === 'POST') {
        const hash = await bcrypt.hash(Get.body.password, 10);
        Get.body.password = hash;
        let db = (await connectDB).db('readingHistory');
        await db.collection('user_cred').insertOne(Get.body);
        Post.status(200).json('성공');
    }
}
