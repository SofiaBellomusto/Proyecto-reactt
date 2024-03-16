import { CartContainer } from "../pages/Cart/CartContainer";
import { CheckoutContainer } from "../pages/Checkout/CheckoutContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../pages/ItemListContainer/ItemListContainer";

export const routes = [

    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer
    },
    {
        id: "detail",
        path: "/item/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
]