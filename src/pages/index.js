import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Banner from '../components/banner'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import { convertContentfulAsset2Banner } from '../utils'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const sites = get(this, 'props.data.site.siteMetadata.sites')
    const socialMedia = get(this, 'props.data.site.siteMetadata.socialMedia')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const banner = convertContentfulAsset2Banner(this.props.data.contentfulAsset)

    return (
      <Layout location={this.props.location} sites={sites} socialMedia={socialMedia} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Banner data={banner} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }, index) => {
                return (
                  <li key={index}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      ...SiteInformation
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fixed(width: 100) {
              width
              height
              src
              srcSet
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulAsset(file: {fileName: {eq: "home-banner.png"}}) {
      ...AssetInformation
    }
  }
`
