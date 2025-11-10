
import {PostItemProps} from "@/types/post.types";
import Link from "next/link";

function PostItem({postIndex, id, title, body}: PostItemProps) {



    return (
        <li key={id}
            className={postIndex as number % 2 === 0 ? "bg-gray-800 rounded-md shadow-sm w-full  p-4 list-none lg:w-1/4" : "bg-gray-600 rounded-md shadow-sm w-full  p-4 list-none lg:w-1/4"}
        >
            <Link key={id} href={`/posts/${id}`}>
                <h2>Title: {title}</h2>
                <p>Body: {body}</p>
            </Link>
        </li>
    );
}

export default PostItem;