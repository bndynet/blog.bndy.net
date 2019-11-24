import React from 'react'
import Img from 'gatsby-image'

import styles from './banner.module.css'

export default ({ data }) => {
  if (typeof data.fullWidth !== 'boolean') {
    data.fullWidth = true
  }
  return (
    <div className={styles.banner}>
      {data.imageFluid &&
        <Img fluid={data.imageFluid} />
      }
      {!data.imageFluid &&
        <img
          className={styles.bannerImage}
          src={data.image}
          style={{ width: data.fullWidth ? '100%' : '' }}
        />
      }
      {(data.title || data.description) && (
        <div className={styles.bannerDetails}>
          <h3 className={styles.bannerHeadline}>{data.title}</h3>
          <p className={styles.bannerTitle}></p>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  )
}
