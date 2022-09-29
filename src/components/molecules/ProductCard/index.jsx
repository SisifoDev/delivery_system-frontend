import * as React from 'react'
import styles from './ProductCard.module.css'

/**
 * Basic card component to display product details
 * @param {string} productId - Product id
 * @param {string} productImg - Image url
 * @param {string} productName - Product name
 * @param {number} productPrice  - Product price
 * @param {function} handleProductSelect - Function to add product to cart
 */

const ProductCard = ({
  productId,
  productImg,
  productName,
  productPrice,
  handleProductSelect,
}) => {
  return (
    <div
      onClick={() => handleProductSelect(productId)}
      className={styles.card__container}
    >
      <img
        className={styles.card__thumb}
        src={productImg || './assets/product-default.png'}
        alt={productName}
      />
      <div className={styles.card__details}>
        <h3 className={styles.card__title}>{productName}</h3>
        <p className={styles.card__prize}>${productPrice}</p>
      </div>
    </div>
  )
}

export default ProductCard
