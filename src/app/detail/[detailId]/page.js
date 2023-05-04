"use client"
import { useParams } from "next/navigation"

export default function DetailsId() {
    

    const testOne = useParams()
    console.log(testOne)

    return (
        <div>DetailsId</div>
    )
}
