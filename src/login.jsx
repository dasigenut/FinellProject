// import { useState } from "react"

// export default Login()
// {
//     const [name, setName] = useState(" ")
//     const [password, setPassword] = useState(" ")
//     //const [admin, setAdmin] = useState(false)
//     async function TryLogin() {
//         e.preventDefault();
//         try {
//             const res = await fetch(`http://localhost:8787/login`, {
//                 method: 'POST',
//                 body: JSON.stringify({ name: name, password: password })
//             });
          
//             if (res===200){
//              console.log(true)
             
//             }
            
//         }
//         catch (err) {
//             console.log(err)
//         }
//       }

//     return (<>
//         <form onSubmit={TryLogin}>
//             <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} />
//             <input type="text" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </form>
//         <button type="SUBMI" >LOGIN</button>
//     </>)
// }

import {useRef} from 'react';
export default function LoginForm(){
    const nameRef =useRef();
    const passwordRef =useRef();
    const url = "http://localhost:8787";

    async function login(e){
        e.preventDefault();
        try{
            const data ={name: nameRef.current.value, password: passwordRef.current.value}
            const res = await fetch(url+'/login',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            console.log("res", res);
            if (res.status === 200){

            }
        }
        catch(err){
            console.log("error ");
        }
    
    }
    return(
        <form>
          <input type="text" placeholder='insert name' ref={nameRef}/>
          <input type="text" placeholder='insert password' ref={passwordRef}/>
          <button onClick={login}>submit</button>
        </form>
    )
}
