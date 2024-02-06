import { CartWidget }   from '../common/CartWidget.jsx'; 

export const Navbar = () => {
    return (
        <div>
            <h3>PUFFS.URU</h3>
            <ul>
                <li>Todos</li>
                <li>Zero</li>
                <li>Bali</li>
                <li>Chufi</li>
                <li>ElfWorld</li>
            </ul>
            <h4>carrito</h4>
            <CartWidget />
        </div>
    );
}