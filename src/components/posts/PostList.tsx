'use client'

import {useState, useEffect} from "react";
import {IPost} from "@/types/post.types";
import PostItem from "@/components/posts/PostItem";


function PostList() {

    const [posts, setPosts] = useState<IPost[] | null>(null);
    const [searchPosts, setSearchPosts] = useState('');
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
            <div className="w-screen h-[100dvh] flex flex-col items-center justify-center p-5 gap-3">
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

    const MAX_LENGTH_TITLE = 50 as const;
    const MAX_LENGTH_BODY = 90 as const;
    const truncText = (text: string, maxLength: number) => {
        if(text.length < maxLength) return text;
        return text.slice(0, maxLength) + '...';
    }



    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchPosts.toLowerCase()));

    return (
        <div>
            <ul className="w-screen flex flex-col items-center justify-center gap-4 p-4">
                <input
                    className="bg-gray-800 px-4 py-2 w-full lg:w-1/4 rounded caret-transparent focus:outline-gray-600 focus:outline-1"
                    placeholder="Найти пост..."
                    type="text" value={searchPosts} onChange={(e) => setSearchPosts(e.target.value)} />
                {filteredPosts.map((post, postIndex) => (
                   <PostItem key={post.id} postIndex={postIndex} id={post.id} title={truncText(post.title, MAX_LENGTH_TITLE)} body={truncText(post.body, MAX_LENGTH_BODY)}/>
                ))}
            </ul>
        </div>
    );
}

export default PostList;