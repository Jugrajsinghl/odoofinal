// import {GoogleLogin} from 'react-google-login'
// import axios from "axios"
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// const clientID = "492913882305-c5iag7mb7hsnqso7rc55h2so54onpvqf.apps.googleusercontent.com"
// const  navigate = useNavigate()

// function GoogleLog(){

// const onFailure = (res) => {
//     console.log("failed", res);


// }


// const onSuccess = async(res) => {

//     try {
//         const response = await axios.post('http://localhost:3000/api/auths/loginwithgoogle',{email:res.profileObj.email})
//         console.log("dddddddddd",response.data.newUser);
//         // console.log(response.data);
//         if(response.data.status===500){
//           toast.error('user not found')
//           return;

//         }
        
//         if(response.data.success==true){
//           toast.success("login succesfully")
//         //   localStorage.setItem('UserInfo',JSON.stringify(response.data.newUser))
//         navigate('/')
//         return;
//         }
//     } catch (error) {
//         console.log(error);
//     }
//     // navigate('/')
//     console.log("ok" , res.profileObj.email);
// }

// return (
//     <div id="signInButton">
//     <GoogleLogin
//     clientId={clientID}
//     buttonText="login"
//     onSuccess={onSuccess}
//     onFailure={onFailure}
//     cookiePolicy={'single_host_origin'}
//     isSignedIn={true}/>


// </div>
// )

   
// }

// export default GoogleLog