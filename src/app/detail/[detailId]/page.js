"use client"
import { useParams } from "next/navigation"

export default function DetailsId() {
    

    const testOne = useParams()
    console.log(testOne)

    return (
        <div>
            <h1>Link URL contained: </h1>
            <h2>{`>> ${testOne.detailId} <<`}</h2>
        </div>
    )
}
