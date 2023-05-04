import Link from 'next/link'
import Navigation from '../Components/Navigation'



export default async function Detail() {


    const tempFetch = await fetch("https://swanky-api.onrender.com/started", {
        next: { revalidate: 30 }
    })

    

    const data = await tempFetch.json()
    // console.log(data.bullets)

    return (
        <div className='detail'>
            <Navigation />
            <h1>Details</h1>
            <ul>
                {data.bullets.map((bullet) => {
                    return (
                        <Link href={`/detail/${bullet.id}`} key={bullet.id}>{bullet.name}</Link>
                    )
                })}
            </ul>
        </div>
    )
}