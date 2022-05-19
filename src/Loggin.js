

export default function Loggin({ navigateTo, inputPassword, setInputPassword, inputUsername, setInputUsername }) {
    

    const users = [
        {
          username: 'josip',
          password: '12345'  
        }
    ]
    
    const isLoggedIn = () => {
        users.forEach((user) => {
            if (user.username === inputUsername && user.password === inputPassword) {
                navigateTo('products')
            } else 
            {
                alert("Fel användarnam eller lösenord, försök igen...")
            }
        })
     }

    
  return (
    <div>
        Användarnamn<input type="text"  onChange={(event) => setInputUsername(event.target.value)}></input>
        Lösenord<input type="password" onChange={(event) => setInputPassword(event.target.value)}></input>
        <button onClick={() => isLoggedIn()}>Logga in</button>
    </div>
  )
}


