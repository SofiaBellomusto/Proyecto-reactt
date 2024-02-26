import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export const CartWidget = () => {
    return (
        <div>
            <span>4</span>
            <ShoppingCartIcon/>
        </div>
    );
}