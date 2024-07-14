import React, { useState } from 'react';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify';
const RegisterPage = () => {
   
    const navigate = useNavigate()
      const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(event.target);
        const UserName = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const role='user'
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('email:', email);

        const res = await axios.post('http://localhost:3000/api/auths/register',{UserName,password,email,role})
        if(res.data.register==true){
          toast.success('User register Succesfully')
        }
        
        navigate('/login')
        console.log(res);
        
      };
    
    
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 id="welcometag">Welcome to BookMedia!!</h2>
        <h2>Register as User</h2>
        <form onSubmit={handleSubmit}>
          
<>
              <div className="input-group">
              <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            
          </div>
          
          </>
          
            {/* {role=='admin' && (
                <>
                  <div className="input-group">
                 <label htmlFor="username">AdminId</label>
                 <input type="text" id="username" name="username" required />
               </div>
               <div className="input-group">
                 <label htmlFor="password">adminId password</label>
                 <input type="password" id="password" name="staffpassword"  required />
               </div>
              
                </>
            )}
            {role=='librarian' && (
                <>
                 <div className="input-group">
                 <label htmlFor="username">StaffId</label>
                 <input type="text" id="username" name="username" required />
               </div>
               <div className="input-group">
                 <label htmlFor="password">staffId password</label>
                 <input type="password" id="password" name="staffpassword"  required />
               </div>
               
                </>
            )}
          <div className="input-group role-group ">
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
            </div> */}

          <button type="submit">Register</button>
        </form>
        <Link to='/login'>Login as an Admin</Link>
<br/>
        <Link to='/login'>Login as an Librarian</Link>
        <br/>
        <Link to='/login'>Already have an Account</Link>
      </div>
    </div>
  );
};

export default RegisterPage;