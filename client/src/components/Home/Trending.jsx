import React, { useEffect, useState } from 'react'
import image from '/image.jpg'

export default function Trending(props) {
    const [books, setBooks] = useState([])
    const booke = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg',
        '/2.jpg',
        '/1.jpg',
        '/4.jpg',
    ]
    const API_URLS = [
        'https://www.googleapis.com/books/v1/volumes?q=harry+potter',
        'https://www.googleapis.com/books/v1/volumes?q=lord+of+the+rings',
        'https://www.googleapis.com/books/v1/volumes?q=game+of+thrones',
        'https://www.googleapis.com/books/v1/volumes?q=to+kill+a+mockingbird',
        'https://www.googleapis.com/books/v1/volumes?q=1984'
      ];
   
  return (
    <div className='Treding'>
                    <div className='books'>Trending</div>
                    {props.data.map((b,i) => (
                       <div className='new-arrival-main'>
                       <img src={booke[i]} alt="" className='new-arrival-img' />
                       <div className='new-arrival-desc new-trending'>
                           <p>{b.BookName}</p>
                           <p>{b.author}</p>
                           <p>₹{b.RentPrice} per/Day</p>
                       </div>
               </div>
                    ))}
                    {/* <div className='new-arrival-main'>
                            <img src={image} alt="" className='new-arrival-img' />
                            <div className='new-arrival-desc new-trending'>
                                <p>Python Tricks the book</p>
                                <p>Dab baber . 2017 . No preview</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae veritatis quod illo? Necessitatibus, ex perferendis non libero quia eligendi.</p>
                            </div>
                    </div>

                    <div className='new-arrival-main'>
                            <img src={image} alt="" className='new-arrival-img'/>
                            <div className='new-arrival-desc new-trending'>
                                <p>Python Tricks the book</p>
                                <p>Dab baber . 2017 . No preview</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae veritatis quod illo? Necessitatibus, ex perferendis non libero quia eligendi.</p>
                            </div>
                    </div>

                    <div className='new-arrival-main'>
                            <img src={image} alt="" className='new-arrival-img'/>
                            <div className='new-arrival-desc new-trending'>
                                <p>Python Tricks the book</p>
                                <p>Dab baber . 2017 . No preview</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae veritatis quod illo? Necessitatibus, ex perferendis non libero quia eligendi.</p>
                            </div>
                    </div>

                    <div className='new-arrival-main'>
                            <img src={image} alt="" className='new-arrival-img'/>
                            <div className='new-arrival-desc new-trending'>
                                <p>Python Tricks the book</p>
                                <p>Dab baber . 2017 . No preview</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae veritatis quod illo? Necessitatibus, ex perferendis non libero quia eligendi.</p>
                            </div>
                    </div> */}
                </div>
  )
}
