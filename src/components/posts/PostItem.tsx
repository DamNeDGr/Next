
import {PostItemProps} from "@/types/post.types";
import Link from "next/link";

function PostItem({id, title, body}: PostItemProps) {




    return (
        <li key={id}
            className="bg-gray-800 rounded-md shadow-sm w-1/4 p-4 list-none"
        >
            <Link key={id} href={`/posts/${id}`}>
                <h2>Title: {title}</h2>
                <p>Body: {body}</p>
            </Link>
        </li>
    );
}

export default PostItem;