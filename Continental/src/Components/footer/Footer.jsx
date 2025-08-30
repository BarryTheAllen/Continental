import "./Footer.css"
import { infoLinks, followLinks } from "../../Data/footerData"
import FooterLinkGroup from "./FooterLinkGroup"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
            <h2>Continental</h2>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title="More" Links={infoLinks} isSocial={false}/>
        <div className="hr"></div>
        <FooterLinkGroup title="Follow" Links={followLinks} isSocial={true}/>
      </div>
      <p className="footer-copyright">© <span className="year">{currentYear}</span> Continental tour-agency, all rights reserved</p>
    </footer>
  )
}

export default Footer