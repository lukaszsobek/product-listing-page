import React from 'react'

const ProductList = ({ productList }) => {
  const listItems = productList.map((productData, key) => {
    return <ProductListItem key={key} data={productData} />
  })

  return (
    <section className='product-list'>
      { listItems }
    </section>
  )
}

const ProductListItem = ({
  data: { imageUrl, name, category, colors, price }
}) => {
  return (
    <div className='product-list__item'>
      <div className='product-list__item__name'>{ name }</div>
      <div className='product-list__item__image'>
        <img src={imageUrl} alt='sample clipart' />
      </div>
      <div className='product-list__item__category'>Category: { category }</div>
      <div className='product-list__item__colors'>
                Colors: <ColorList data={colors} />
      </div>
      <div className='product-list__item__price'>Price: &euro; { price }</div>
    </div>
  )
}

const ColorList = ({ data }) => {
  return data.map((color, key) => {
    return (
      <span key={key} className='product-list__item__colors__name' >
        { color }
      </span>
    )
  })
}

export { ColorList, ProductListItem, ProductList }
export default ProductList
