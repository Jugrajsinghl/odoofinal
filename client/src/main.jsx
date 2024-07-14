import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth0Provider} from "@auth0/auth0-react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider domain="dev-zlz6ue714c2fjd4z.us.auth0.com"
  clientId="tO3WLXqOgOY0INBGt3MsQfHdKXyGvRN3"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >

    <App />
  <ToastContainer/>
  </Auth0Provider>
    
)
