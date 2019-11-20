require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Bendy\'s Blog',
    description: 'Bendy\'s Blog, Record IT',
    sites: [
      { text: 'MY HOME', icon: 'fa fa-', link: 'http://bndy.net/'},
      { text: 'MY WIKI', icon: 'fa fa-', link: 'http://wiki.bndy.net/'},
      { text: 'MY BLOG', icon: 'fa fa-', link: 'http://blog.bndy.net/'},
    ],
    socialMedia: [
      { text: 'Facebook', icon: 'fa fa-facebook', link: 'https://www.facebook.com/bendy.zhang'},
      { text: 'LinkedIn', icon: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/bndynet/'},
      { text: 'Twitter', icon: 'fa fa-twitter', link: 'https://twitter.com/bndynet'},
      { text: 'CodePen', icon: 'fa fa-codepen', link: 'https://codepen.io/bndynet/'},
      { text: 'GitHub', icon: 'fa fa-github', link: 'https://github.com/bndynet'},
      { text: 'Email', icon: 'fa fa-envelope-o', link: 'mailto:zb@bndy.net'},
    ],
  },
  pathPrefix: '/gatsby-contentful-starter1',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
