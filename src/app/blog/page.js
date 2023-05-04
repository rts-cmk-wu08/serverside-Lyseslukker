import React from 'react'
import Navigation from '../Components/Navigation'
import Link from 'next/link'

export default async function Page() {

    const response = await fetch("https://swanky-api.onrender.com/posts", {
        // SSR Server Side Render (no cache)
        next: { revalidate: 0}
    })

    const initialData = await response.json()

    return (
        <div className='blog'>
            <Navigation />
            <h1>I am blog</h1>
            <ul>
                {initialData.map((post) => {
                    const temp = JSON.stringify(post)
                    // console.log(temp)
                    return (
                        <Link style={{display: "grid"}} href={`/detail/haha`} key={post.id} >{post.title}</Link>
                    )
                })}
            </ul>
        </div>
    )
}