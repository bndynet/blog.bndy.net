import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    {article.heroImage && (
      <Img
        className={styles.previewImagewrapper}
        alt={article.title}
        fluid={article.heroImage.fluid}
        imgStyle={{ objectFit: 'contain', height: 'inherit' }}
      />
    )}
    <div className={styles.preivewBody}>
      <h3 className={styles.previewTitle}>
        <Link to={`/post/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      {(article.tags || []).map(tag => (
        <span className={styles.tag} key={tag}>
          {tag}
        </span>
      ))}
      {article.description && (
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      )}
    </div>
  </div>
)
