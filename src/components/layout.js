import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import base from './base.css'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { location, children, sites, socialMedia } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <header>
          <div className="container">
            <div className="inline-items">
              {(sites || []).map(link => (
                <a key={link.link} href={link.link} target="_blank">
                  {link.text}
                </a>
              ))}
            </div>
            <div className="inline-items">
              {(socialMedia || []).map(link => (
                <a key={link.link} href={link.link} target="_blank">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </header>
        {children}
        <Footer links={socialMedia} />
      </div>
    )
  }
}

export default Template

export const query = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
      description
      sites {
        icon
        text
        link
      }
      socialMedia {
        icon
        text
        link
      }
    }
  }
  fragment AssetInformation on ContentfulAsset {
    id
    title
    description
    file {
      fileName
      url
    }
  }
`