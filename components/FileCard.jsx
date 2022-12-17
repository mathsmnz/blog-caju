import React from 'react'
import Link from 'next/link'
import moment from "moment/moment";

const FileCard = ({file}) => {
    return (
        <div className='bg-white shadows-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <h1 className="transition duration-600 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <a href={file.mirrorUrl}>
                    {file.name}
                </a>
            </h1>
            <div className="bloc lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="font-medium text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span className="align-middle">
                        {moment(file.createdAt).format('DD MMM, YYYY')}
                    </span>
                </div>
            </div>
            <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                {file.description}
            </p>
            <div className="text-center">
                <a href={file.mirrorUrl}>
                <span
                    className="transition duration-300 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                        Go to file
                </span>
                </a>
            </div>
        </div>
    )
}

export default FileCard