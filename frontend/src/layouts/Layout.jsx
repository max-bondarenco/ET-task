import Header from '../components/Header'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className="wrapper">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout
