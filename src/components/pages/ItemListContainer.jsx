import ProductCard from "../common/productCard";

const ItemListContainer = () => {
    return <div>
        <h2>Aca van los productos</h2>
        <ProductCard titulo="Bali" desc="las mejores" precio="$1200" />
        <ProductCard titulo="Chufi" desc="las mejores" precio="$1200"/>
        <ProductCard titulo="ElfWorld" desc="las mejores" precio="$1400"/>
    </div>
}

export default ItemListContainer;
