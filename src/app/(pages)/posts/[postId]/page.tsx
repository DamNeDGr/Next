'use client'
import {useParams} from "next/navigation";
import {useState, useEffect} from "react";
import {IPost} from "@/types/post.types";
import PostItem from "@/components/posts/PostItem";
import Link from "next/link";
import NotFound from "@/app/not-found";

function Page() {

    const params = useParams();
    const postId = params.postId;

    const [post, setPost] = useState<IPost>();
    const [loading, setLoading] = useState(true);

    const getPosts = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            setLoading(true);
            if (!res.ok) {
                setLoading(false);
                throw new Error("Failed to fetch posts.");
            }
            const post = await res.json();
            setPost(post);
            setLoading(false);
        }
        catch (err){
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])


    if (loading) {
        return (
            <div style={{height: 'calc(100dvh - 60px)'}} className="w-screen  flex flex-col items-center justify-center p-5 gap-3">
                <h2 className="text-5xl text-blue-400 animate-bounce">Loading...</h2>
            </div>
        );
    }

    if (!post) return NotFound()



    return (
        <div
            style={{height: 'calc(100dvh - 60px)'}}
            className="w-screen flex flex-col items-center justify-center p-5 gap-3 lg:h-screen ">
            <PostItem id={post.id} title={post.title} body={post.body} />
            <Link
                className="bg-blue-700 rounded-md shadow-sm w-full lg:w-1/4 p-2 text-center hover:bg-blue-400 duration-300"
                href="/posts">Все посты</Link>
        </div>
    );
}

export default Page;