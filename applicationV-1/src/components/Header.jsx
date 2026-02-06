export default function Header(props)
{
    return (
        <header className="head">
           <h1> {props.title}</h1>

            <nav className="nav">
                <a href="#"> Home </a>
                <a href="#">Contact us</a>
                <a href="#">Cart</a>
            </nav>
        </header>
    )
}