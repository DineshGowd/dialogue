import Post from "@/model/post";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
    try {
        await connectToDB();
        const posts = await Post.find({}).populate('creator');
        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch the new Post", { status: 500 })

    }
}