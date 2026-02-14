// export default function Header({title,name,...rest}) // destructuring
export default function Header({card}) 
{
    return (
        <header className="head">
           {/* <h1> {title}  {name}  </h1> */}
            {card}
            <nav className="nav">
                <a href="#"> Home </a>
                <a href="#">Contact us</a>
                <a href="#">Cart</a>
            </nav>
        </header>
    )
}