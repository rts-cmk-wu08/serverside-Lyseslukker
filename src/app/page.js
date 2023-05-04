import Landingpage from "./Components/Landingpage"

export default async function Home() {
  const fetchArray = [
    "https://swanky-api.onrender.com/offers",
    "https://swanky-api.onrender.com/products",
    "https://swanky-api.onrender.com/started"
  ]


  const response = await Promise.all(
    fetchArray.map((url) => {
      // SSG Static Site Generation
      return fetch(url)
    })
  )


  const initialData = await Promise.all(
    response.map((res) => {
      return res.json()
    })
  )


  return (
    <div className="home">
      <Landingpage props={initialData} />
    </div>
  )
}
