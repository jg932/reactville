import React, { useState } from 'react'
import '../../styles/super-market.css'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

// Components & Data
import { products } from '../../data/market-data'

const SuperMarket = () => {
  console.log(products)

  const [cart, setCart] = useState([])
  const [productcategory, setProductCategory] = useState("Produce")

  return (
    <div className="super-market">
      <section>
        <MarketNav />
        <DisplayProducts />
      </section>

      <Cart />

    </div>
  )
}

export default SuperMarket