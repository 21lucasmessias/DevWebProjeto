
import { Home, ShoppingCart, AlternateEmail, Done, Person, SportsEsports } from '@material-ui/icons';

export const menus = [
    {
        name: 'Home',
        Icon: Home,
        route: '/'
    },
    {
        name: 'Product',
        Icon: SportsEsports,
        route: '/product'
    },
    {
        name: 'Cart',
        Icon: ShoppingCart,
        route: '/cart'
    },
    {
        name: 'Finish',
        Icon: Done,
        route: '/finish'
    },
    {
        name: 'Contact',
        Icon: AlternateEmail,
        route: '/contact'
    },
    {
        name: 'Register',
        Icon: Person,
        route: '/register'
    },

]