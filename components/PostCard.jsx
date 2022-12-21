import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
    return (
        <div className='flex flex-col bg-white mx-auto rounded-lg overflow-hidden md:max-w-3xl  mb-4'>
            <div className="md:flex">
                <div className="p-4">
                    <Link href={`/post/${post.slug}`} key={post.title}>
                        <h2 className="inline font-semibold uppercase  mb-1 hover:underline">
                            {post.title}
                        </h2>
                        <h3 className="mb-1 font-light ">
                            {post.excerpt}
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="px-4 py-2 m-4 inline-block bg-onContainer font-medium rounded-3xl">
                    <Link href={`/post/${post.slug}`} key={post.title}>
                        <p>
                            Leia mais
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard