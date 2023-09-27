import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(Get, Post) {
    if (Get.method === 'POST') {
        let db = (await connectDB).db('readingHistory');
        await db.collection('reviews').deleteOne({ _id: new ObjectId(Get.body.id) });
        Post.status(200).redirect(302, '/reviews');
    }
}
