import React from 'react'
import Img from 'gatsby-image'

import styles from './banner.module.css'

export default ({ data }) => (
  <div className={styles.banner}>
    <img src={data.file.url} style={{maxHeight: 460}} />
    <div className={styles.bannerDetails}>
      <h3 className={styles.bannerHeadline}>{data.title}</h3>
      <p className={styles.bannerTitle}></p>
      <p>{data.description}</p>
    </div>
  </div>
)
