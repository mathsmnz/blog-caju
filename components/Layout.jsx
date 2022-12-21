import React from 'react'
import {Footer, Header} from "./";

const Layout = ({children}) => {
    return (
        <>
            <div className="flex flex-col h-screen justify-between">
                <Header className="h-10"/>
                <div className="flex-auto">
                    {children}
                </div>
                <Footer className="mt-auto"/>
            </div>

        </>
    )
}

export default Layout