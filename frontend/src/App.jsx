import { createBrowserRouter } from 'react-router-dom'
import { Navigate, RouterProvider } from 'react-router'
import Layout from './layouts/Layout'
import ShopPage from './pages/ShopPage/ShopPage'
import CartPage from './pages/CartPage/CartPage'
import ShopPageLayout from './layouts/ShopPageLayout'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../redux/store'
import HistoryPage from './pages/HistoryPage/HistoryPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate replace to="shop" />,
            },
            {
                path: 'shop',
                element: <ShopPageLayout />,
                children: [
                    {
                        path: ':id',
                        element: <ShopPage />,
                    },
                ],
            },
            {
                path: 'cart',
                element: <CartPage />,
            },
            {
                path: 'history',
                element: <HistoryPage />,
            },
        ],
    },
])

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    )
}

export default App
