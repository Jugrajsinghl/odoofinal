import React, { useState } from 'react';
import './LoginPage.css';
// import axios from axios
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"
import { toast } from 'react-toastify';


const RegisterPage = () => {
  const navigate = useNavigate()
  const { user,loginWithRedirect,logout } = useAuth0();
  console.log(user);
    const [role, setRole] = useState('user');
    const handleRoleChange = (event) => {
        setRole(event.target.value);
        
      };
      const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
try {
  console.log('Username:', email);
  console.log('Password:', password);
  console.log('Role:', role);
   const res = await axios.post('http://localhost:3000/api/auths/login',{email,password})
        console.log(res.data);
        if(res.data.status===500){
          toast.error('user not found')
          return;

        }
        if(res.data.password===false){
          toast.error('Incorrect passsword')
          return;
        }
        if(res.data.success==true){
          toast.success("login succesfully")
          localStorage.setItem('UserInfo',JSON.stringify(res.data))
          navigate('/')
          window.location.reload()
        }
} catch (error) {
  
}
       
      };
    
    
  return (
    <div className="login-page">
      

      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {role=='user' && (
<>
              <div className="input-group">
              <label htmlFor="username">Username</label>
            <input type="email" id="email" name="email" required />
          </div>
          {/* <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div> */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            
          </div>
          
          </>
          )}
            {role=='admin' && (
                <>
                  <div className="input-group">
                 <label htmlFor="username">AdminEmail</label>
                 <input type="email" id="email" name="email" required />
               </div>
               <div className="input-group">
                 <label htmlFor="password">adminId password</label>
                 <input type="password" id="password" name="password"  required />
               </div>
              
                </>
            )}
            {role=='librarian' && (
                <>
                 <div className="input-group">
                 <label htmlFor="username">StaffId</label>
                 <input type="email" id="email" name="email" required />
               </div>
               <div className="input-group">
                 <label htmlFor="password">staffId password</label>
                 <input type="password" id="password" name="password"  required />
               </div>
               
                </>
            )}
          <div  className="input-group role-group">
          <label>
              <input 
                type="radio" 
                name="role" 
                value="user" 
                checked={role === 'user'} 
                onChange={handleRoleChange} 
              />
              User
            </label>
            <label>
              <input 
                type="radio" 
                name="role" 
                value="admin" 
                checked={role === 'admin'} 
                onChange={handleRoleChange} 
              />
              Admin
            </label>
            <label>
              <input 
                type="radio" 
                name="role" 
                value="librarian" 
                checked={role === 'librarian'} 
                onChange={handleRoleChange} 
              />
              Librarian
            </label>
            </div>

          <button type="submit">Register</button>
        </form>
        {/* <Link>signin using Google</Link> */}
      <br/>
      <Link to="/register">signin using Email</Link>
      </div>
    </div>
  );
};

export default RegisterPage;