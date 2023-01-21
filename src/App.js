import React from "react"
import Nav from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Person from "./components/Person"
import personData from "./components/personData"
import data from "./data"

export default function App(){
  const cards = data.map(item=>{
    return(
      <Card
         img={item.coverImg}
         rating={item.stats.rating}
         reviewCount={item.stats.reviewCount}
         location={item.location}
         title={item.title}
         price={item.price} />
    )
  })
  return(
    <div>
      <Nav />
      <Hero />
      <section className="card-lists">
      {cards}
      </section>
    </div>
  )
}