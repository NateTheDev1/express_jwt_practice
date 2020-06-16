// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./styles.css";

// //http://localhost:3000/api/user/(register || login)
// //http://localhost:3000/api/posts - Requires Auth

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);
//   const [formValuesLogin, setFormLogin] = useState({
//     email: "",
//     password: ""
//   });

//   useEffect(() => {
//     const tokenExist = JSON.parse(localStorage.getItem("token"));
//     if (tokenExist === null) {
//       setLoading(false);
//       return;
//     }

//     if (tokenExist !== null) {
//       setToken(tokenExist);
//       setLoading(false);
//     }
//   }, []);

//   const handleLogin = e => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3000/api/user/login", formValuesLogin)
//       .then(res => {
//         setToken(res.data);
//         localStorage.setItem("token", JSON.stringify(res.data));
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     setFormLogin({
//       email: "",
//       password: ""
//     });
//   };

//   const handleChangeLogin = e => {
//     setFormLogin({
//       ...formValuesLogin,
//       [e.target.name]: e.target.value
//     });
//   };
//   const headerKey = "auth-token";

//   const fetchProfile = () => {
//     axios
//       .get("http://localhost:3000/api/posts", {
//         headers: { [headerKey]: token }
//       })
//       .then(res => {
//         setUser(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div className="App">
//       <h1>API Testing</h1>
//       <h2>User: {user === null ? "N/A" : user.name}</h2>

//       {token === null && (
//         <div>
//           <h2>Login</h2>
//           <form onSubmit={handleLogin}>
//             <input
//               type="text"
//               name="email"
//               placeholder="email"
//               value={formValuesLogin.email}
//               onChange={handleChangeLogin}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="password"
//               value={formValuesLogin.password}
//               onChange={handleChangeLogin}
//             />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       )}
//       {token !== null && <button onClick={fetchProfile}>Fetch Profile</button>}
//     </div>
//   );
// }
