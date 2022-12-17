import React from 'react'
import {Categories, FileCard, Loader, PostCard, PostWidget} from "../../components";
import {getCategories, getFilesByCategory, getPostsByCategory} from "../../services";
import {useRouter} from "next/router";


const CategoryDetail = ({posts, files}) => {
    const router = useRouter();
    if (router.isFallback) {
        return <Loader />;
    }

    console.log(files)
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    {
                        files.map((file, index) => (
                            <FileCard key={index} file={file}/>
                        ))
                    }
                    {
                        posts.map((post, index) => (
                        <PostCard key={index} post={post}/>
                        ))
                    }
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <PostWidget/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetail

export async function getStaticProps({params}) {
    const posts = await getPostsByCategory(params.slug);
    const files = await getFilesByCategory(params.slug);

    return {
        props: { posts: posts, files: files },
    };
}


export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({slug}) => ({params: {slug}})),
        fallback: true,
    };
}