import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Banner from '../components/banner'
import { convertContentfulAsset2Banner } from '../utils'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    let banner = convertContentfulAsset2Banner(this.props.data.contentfulAsset)
    if (post.heroImage) {
      banner = {
        image: post.heroImage.file.url,
        fullWidth: false,
      };
    }

    return (
      <Layout
        location={this.props.location}
        sites={this.props.data.site.siteMetadata.sites}
        socialMedia={this.props.data.site.siteMetadata.socialMedia} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <Banner data={banner} />
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      ...SiteInformation
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulAsset(file: {fileName: {eq: "blog-post-banner.png"}}) {
      ...AssetInformation
    }
  }
`
