export default function CheckOutCard({product,removeFromCart})
{
    return(
        <div>
            <img src={product.image} alt={product.name}/>
            <h3>Name : {product.name}</h3>
            <h3>Price : {product.price}</h3>
            <button onClick={() => removeFromCart(product)}>Remove From Cart</button>
        </div>
    )
}