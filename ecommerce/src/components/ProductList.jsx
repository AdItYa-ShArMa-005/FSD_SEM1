import ProductCard from "./ProductCard"
export default function ProductList({products,addToCart})
{
    return(
    <div>
        <h2>Product List : </h2>
        {
            products.map(item => <ProductCard key={item.id} product={item} addToCart={addToCart}/>)
        }
    </div>
    )
}