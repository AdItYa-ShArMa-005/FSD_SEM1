export default function ProductCard({product,addToCart})
{
    return(
        <div>
            <img src={product.image} alt={product.name}/>
            <h4>Name : {product.name}</h4>
            <h4>Price : {product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}