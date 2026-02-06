export default function Footer(props)
{
    return(
        <footer className="foot">
            <p>{props.greet} by {props.person}</p>
            <p>{props.year[1]}</p>
            <p>{props.company.location}</p>
        </footer>
    )
}