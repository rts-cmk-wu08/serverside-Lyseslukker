import React from 'react'
import Link from "next/link"

export default function Navigation() {
    return (
        <div className='navigation'>
            <nav className='navigation__nav'>
                <Link href="/">Home</Link>
                <Link href="/blog">Blogs</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    )
}