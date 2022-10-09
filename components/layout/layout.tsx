import type { FC, ReactNode } from 'react'
import BottomBar from '../bottom-bar'
import Navbar from '../navbar'

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <BottomBar />
        </>
    )
}

export default Layout
