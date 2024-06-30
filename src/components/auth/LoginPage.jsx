// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import UsersService from "../services/UsersService";



// function LoginPage() {
//    const [email, setEmail] = useState('')
//    const [password, setPassword] = useState('')
//    const [error, setError] = useState('')
//    const navigate = useNavigate();

//    const handleSubmit = async (e) => {
//       e.preventDefault();

//       try {
//          const userDate = await UsersService.login(email, password)
//          console.log(userDate)

//          if (userDate.token) {
//             localStorage.setItem('token', userDate.token);
//             localStorage.setItem('role', userDate.role);

//             const role = userDate.role;
//             console.log("role----" +role);
            
//             switch (role) {
//                case 'ADMIN':
//                  navigate('/process-Selection');
//                  break;
//                case 'HDFC':
//                  navigate('/hdfcmrpage');
//                  break;
//                case 'ICICI':
//                  navigate('/icicimrpage');
//                  break;
//                case 'MIS':
//                   navigate('/mispage');
//                   break;
 
//                default:
//                  setError('Invalid role');
//              }
       
//       } else {
//          setError(userDate.message)
//       }
//    } catch (error) {
//       console.log(error)
//       setError(error.message)
//       setTimeout(() => {
//          setError('');
//       }, 5000);
//    }
// }

// return (

//    <div className="auth-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit}>
//          <div className="form-group">
//             <label>Email: </label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//          </div>
//          <div className="form-group">
//             <label>Password: </label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//          </div>
//          <button type="submit">Login</button>
//       </form>
//    </div>
// )
// }
// export default LoginPage;
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../services/UsersService";
import { AuthContext } from "../auth/AuthContext";
import './LoginPage.css';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await UsersService.login(email, password);
      console.log(userData);

      if (userData.token) {
        login(userData.token, userData.role);
        navigate('/');
      } else {
        setError(userData.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;