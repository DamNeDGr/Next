export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}



export interface PostItemProps {
    postIndex?: number;
    id: number;
    title: string;
    body: string;
}