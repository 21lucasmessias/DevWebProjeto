import { Home } from '../screens/home';
import { Contact } from '../screens/contact'
import { Register } from '../screens/register'
import { Product } from '../screens/product'
import { Cart } from '../screens/cart'
import { Finish } from '../screens/finish'

export const routes = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/contact',
        Component: Contact,
    },
    {
        path: '/register',
        Component: Register,
    },
    {
        path: '/product',
        Component: Product,
    },
    {
        path: '/cart',
        Component: Cart,
    },
    {
        path: '/finish',
        Component: Finish,
    },
]