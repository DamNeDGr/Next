'use client'

import {useState, useEffect} from "react";
import {IPost} from "@/types/post.types";
import PostItem from "@/components/posts/PostItem";


function PostList() {

    const [posts, setPosts] = useState<IPost[] | null>(null);
    const [loading, setLoading] = useState(true);

    const getPosts = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) {
                setLoading(false);
                throw new Error("Failed to fetch posts.");
            }
            const posts = await res.json();
            setPosts(posts);
            setLoading(false);
        }
        catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])




    if (loading) {
        return (
            <div className="w-screen h-screen flex flex-col items-center justify-center p-5 gap-3">
                <h2 className="text-5xl text-blue-400 animate-bounce">Loading...</h2>
            </div>
        );
    }

    if (!posts) {
        return (
            <div className="w-screen h-screen flex flex-col items-center justify-center p-5 gap-3">
                <h2 className="text-5xl">Posts not found!</h2>
            </div>
        );
    }

    return (
        <div>
            <ul className="w-screen flex flex-col items-center justify-center gap-4">
                {posts.map((post) => (
                   <PostItem key={post.id} id={post.id} body={post.body} title={post.title} />
                ))}
            </ul>
        </div>
    );
}

export default PostList;