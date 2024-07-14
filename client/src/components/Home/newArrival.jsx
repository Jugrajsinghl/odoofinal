import React, { useEffect, useState } from 'react'
import image from '/image.jpg'
import axios from "axios"

export default function NewArrival(props) {
    const [books, setBooks] = useState([])

    const booke = [
        '/6.jpg',
        '/7.jpg',
        '/3.jpg',
        '/4.jpg',
        '/5.jpg',
        '/1.jpg',
        '/4.jpg',
    ]
    return (
        <div>
            <div className='new-arrival'>
                <div className='new-arrival books'>New Arrival</div>
                <div>
                    {!props.data && (
                        <div>
                            <h1>LOADING...</h1>
                        </div>
                    )}
                    {props.data.map((b,i) => (
                        <div className='new-arrival-main'>
                                <img src={booke[i]} alt="" className='new-arrival-img' />
                            <div className='new-arrival-desc'>
                                <p>   {b.BookName}  </p>
                                <p>   {b.author}  </p>
                                {/* <p>   {b.Desc}  </p> */}
                                <p>  ₹{b.RentPrice} per/Day </p>
                             
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        </div>
    )
}
