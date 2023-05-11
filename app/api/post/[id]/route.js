import Post from "@/model/post";
import { connectToDB } from "@/utils/database";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const post = await Post.findById(params.id);
        if (!post) return new Response("Post not found", { status: 404 })
        return new Response(JSON.stringify(post), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch the new Post", { status: 500 })

    }
}

export const PATCH = async (req, { params }) => {
    const { post, tag } = await req.json();
    try {
        await connectToDB();
        const existingPost = await Post.findById(params.id);
        if (!existingPost) return new Response("Post not found", { status: 404 })
        existingPost.post = post;
        existingPost.tag = tag;
        await existingPost.save();
        return new Response(JSON.stringify(existingPost), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to update the new Post", { status: 500 })

    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();
        await Post.findByIdAndRemove(params.id);
        return new Response("Post Deleted", { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch the new Post", { status: 500 })

    }
}