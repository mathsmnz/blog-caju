import React from 'react'

const FileCard = ({file}) => {
    return (
        <div className='container bg-white shadows-lg rounded-lg p-4 '>
            <div className="flex justify-between items-center ">
                <div>
                    <div className="flex justify-start space-x-4">
                        <div className="font-semibold transition duration-600 cursor-pointer hover:text-pink-600">
                            <a href={file.mirrorUrl}>
                                {file.name}
                            </a>
                        </div>
                        <div className="font-medium">
                            {file.author}
                        </div>
                    </div>
                    <div className="flex justify-start space-x-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span>
                            {file.publicationYear}
                        </span>
                    </div>

                </div>
                <div>
                    <a href={file.mirrorUrl}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FileCard