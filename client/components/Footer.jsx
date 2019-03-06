import React from 'react'

export class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-left"></div>
        <div className="footer-middle">
          <div className="footer-middle-inner">
            <p>The Gear Report</p>
          </div>
        </div>
        <div className="footer-right">
          <ul>
            <li><a className='footer-links' href="/faq">F.A.Q</a></li>
            <li><a className='footer-links' href="https://kwf.co.nz/donate">Donate / Support</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer