import React from "react"

import Header from "../Header"
import Sidebar from "../Sidebar"
import Center from "../Center"

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="container2 flex gap-[20px] py-[20px] ">
                <Sidebar />
                <Center />
            </main>
        </>
    )
}

export default MainLayout
