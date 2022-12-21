import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {getCategories} from "../services";

const Header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories);
        });
    }, []);
    return (
        <div className='container bg-bluish mx-auto w-full p-4'>
            <div className='flex justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className=''>
                    <Link href="/" className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                {/*<div className='hidden md:float-left md:contents'>*/}
                {/*    {categories.map((category) => (*/}
                {/*        <Link key={category.slug} href={`/category/${category.slug}`}>*/}
                {/*            <span*/}
                {/*                className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>*/}
                {/*                {category.name}*/}
                {/*            </span>*/}
                {/*        </Link>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
        )
}

export default Header