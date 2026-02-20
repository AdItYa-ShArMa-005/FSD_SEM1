import CheckOutCard from "./CheckOutCard"
export default function CartCheckOut({cart,removeFromCart,totalAmount})
{
    return(
        <div>
            <h2>Your Cart : </h2>
            {
                cart.map(item => <CheckOutCard key={item.id} product={item} removeFromCart={removeFromCart}  />)
            }
            <h3>Total Cart Amount : {totalAmount}</h3>
        </div>
    )
}