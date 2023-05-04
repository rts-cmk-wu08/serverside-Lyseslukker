import React from 'react'
import Navigation from './Navigation';


export default function Landingpage({ props }) {

    // console.log(props)

    return (
        <div className='landingpage'>
            <Navigation />
            <h1>I am landing page.</h1>

            <h1>Hero: </h1>
            <ul>
                {props[0].map((offer) => {
                    return (
                        <li key={offer.id}>{offer.headline}</li>
                    )
                })}
            </ul>

            <h2>Products</h2>
            <ul>
                {props[1].map((product) => {
                    return (
                        <li key={product.id}>{product.name}</li>
                    )
                })}
            </ul>

            <h2>Started</h2>
            <ul>
                {props[2].bullets.map((bullet) => {
                    return (
                        <li key={bullet.id}>{bullet.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
