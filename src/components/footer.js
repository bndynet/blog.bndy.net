import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div>
            Copyright &copy; {new Date().getFullYear()} &nbsp;
            <a href="http://bndy.net" target="_blank">BNDY-NET</a>
          </div>
          <div className="inline-items">
            {this.props.links && this.props.links.map(link => (
              <a key={link.text} href={link.link} target="_blank">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
