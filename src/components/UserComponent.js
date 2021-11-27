// import React, { useState } from 'react'
// import UserService from '../services/UserService'

// function UserComponent(){

//     const [user, setUser] = useState([]);
    

  
//     const componentDidMount=()=>{
//         UserService.getUsers().then((respone)=>{
//             setUser(respone.data)
//         });
//     }
    
//     if(user.length===0){
//         componentDidMount();
//      }
//      console.log(user)
//     return (
        
//         <div>
//             <h1 className="text-center">User List</h1>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                     <td>User Id</td>
//                     <td>User User Name</td>
//                     <td>USer Last_name</td>
//                     <td>User Email</td>
                    
//                     </tr>
                    
//                 </thead>
//                 <tbody>
//                     {
//                         user.map(user =>
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.user_name}</td>
//                                 <td>{user.password}</td>
//                                 <td>{user.email}</td>
//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>  
//     )
// }

// export default UserComponent
