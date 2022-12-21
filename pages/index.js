import {Categories, PostCard, PostWidget} from "../components";
import {getPosts} from '../services'


export default function Home ({ posts }) {
    return (
        <div className="container mx-auto px-4 lg:px-20">
            <p className="font-bold text-2xl mb-8 mt-8 text-center">
                Bem-vinde ao portal Amparo Trans Pelotas
            </p>
            <div className="flex justify-center">
                <div className="mb-8 py-4 px-2 inline-block bg-onContainer font-medium rounded-3xl">
                    <div className="flex justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <p className="ml-2 mr-2">
                            Biblioteca virtual
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className="">
                <div className="lg:col-span-8 col-span-1">
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post.node} />
                    ))}
                </div>
                {/*<div className="lg:col-span-4 col-span-1">*/}
                {/*    <div className="lg:sticky relative top-8">*/}
                {/*        <PostWidget />*/}
                {/*        <Categories />*/}
                {/*        /!*<Downloads />*!/*/}
                {/*        /!*<Contact />*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
export async function getStaticProps(){
    const posts = (await getPosts()) || [];
    return {
        props:{posts}
    }
}

