import React, { useEffect, useState } from 'react'
import './Home.css'
import image from '/image.jpg'
import NewArrival from './newArrival'
import Trending from './Trending'
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import SearchResult from '../SearchResult'
import UserProfile from '../User'

function Home() {
  const User = JSON.parse(localStorage.getItem('UserInfo'))
const navigate = useNavigate()
  const [books,setBooks] = useState([])
  const [search,setSearch] = useState()
  useEffect(() => {
    async function getBooks() {
        let response = await axios.get('http://localhost:3000/api/product')
        // response = await response.json()
        // dataSet(response)
        if (response.data) {
            setBooks(response.data)
        }
        console.log(response.data);
    }
    getBooks()
}, [])
const LogOut = ()=>{
  localStorage.removeItem('UserInfo')
  window.location.reload();

}
  return (
    
    <div>
      {/* {User && ( */}

      
      <nav className='navbar'>
        <div className='navbar-left-item'>
            <img src={image} alt="" />
            <p>Public Library</p>
        </div>

        <div className='navbar-right-item'>
        <div>
              {User?<button onClick={LogOut}>Logout</button>:<button onClick={()=>navigate('login')}>Login</button>}
            </div>
            <div>
<button onClick={()=>navigate('/search')}>Search</button>
            </div>
        </div>
      </nav>

      <main className='main-section'>
            <div className='Title'>
                <p>Search The Books available in Library</p>
            </div>

            <div className='search-area'>
                <div className='search-bar'>
                <input type='text' className='search' placeholder='Search'  onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
          
                </div>
                <div className='search-btn'>
                    <button>Search</button>
                </div>
            </div>
                <div className={search?'book-section':'book-section-node'}>
                  {books.filter((b)=>b.BookName.toLowerCase().includes(search)
                  ).map((book)=>(
                    <div className='new-arrival-main-dance'>
                                <img src={image} alt="" className='new-arrival-img' />
                            <div className='new-arrival-desc'>
                                <p>   {book.BookName}  </p>
                                <p>   {book.author}  </p>
                                <p>   ₹{book.RentPrice} per/Day  </p>
                             
                            </div>
                            
                        </div>
                  ))}
            
                </div>
           
{!books && (
  <div className='book-section'>
              
  <h1>Loading...</h1>
</div>
)}
{books && (
            <div className='book-section'>
              
                <NewArrival data={books}/>
                <Trending data={books}/>
                {/* <UserProfile/> */}
                
            </div>
            )}
            {/* <SearchResult/> */}
      </main>
    </div>
  )
}

export default Home