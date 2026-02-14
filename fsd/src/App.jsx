import Wrapper from './components/Wrapper'
import UserCard from './components/UserCard'
import './App.css'

export default function App() {

  const users=[
    {
      name:"Virat Kohli",
      role:"Batter",
      country:"India"
    },
    {
      name:"MS DHoni",
      role:"WK-Batter",
      country:"India"
    }
  ]

  return (
   <div>
      <h1>User's Dashboard</h1>
      <Wrapper title="User's List">
        {
          users.map((use,index) => (<UserCard key={index} user={use}/>))
        }
      </Wrapper>
    </div>
  )
}
