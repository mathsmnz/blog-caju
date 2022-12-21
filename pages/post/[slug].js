import React from 'react'
import {Author, Categories, Comments, CommentsForm, Loader, PostDetail, PostWidget} from "../../components";
import {getPostDetails, getPosts} from "../../services";
import {useRouter} from "next/router";


const PostDetails = ({ post }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <Loader />;
    }

    return (
            <div className="container mx-auto px-4 lg:px-20 mb-4">
                <div className="">
                    <div className="">
                        <PostDetail post={post} />
                        <Author author={post.author} />
                        <CommentsForm slug={post.slug} />
                        <Comments slug={post.slug} />
                    </div>
                </div>
            </div>
    );
};

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        },
    };
}


export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}