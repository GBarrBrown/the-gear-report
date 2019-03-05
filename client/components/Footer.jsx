import React from 'react'

class Footer extends React.Component {

  render() {
    return (
      <div class="footer">
        <div class="footer-left"></div>
        <div class="footer-middle">
          <div class="footer-middle-inner">
            <p>The Gear Report</p>
          </div>
        </div>
        <div class="footer-right">
          <ul>
            <li><a href="about:blank">Donate / Support</a></li>
            <li><a href="/faq">F.A.Q</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer