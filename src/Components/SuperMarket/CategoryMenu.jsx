import React from 'react'

const CategoryMenu = (props) => {
  const categories = [...new Set(props.products.map((product) => product.category))]

  return (
    <select onChange={(event) => props.setProductCategory(event.target.value)} >
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryMenu