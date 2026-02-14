export default function UserCard({user})
{
    return(
        <div>
            <h3> User name : {user.name}</h3>
            <h3> User role : {user.role}</h3>
            <h3> User country : {user.country}</h3>
        </div>
    )
}