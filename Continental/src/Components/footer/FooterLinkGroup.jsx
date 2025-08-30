import { Link } from "react-scroll";

const FooterLinkGroup = ({ title, Links, isSocial }) => {
  return (
    <div className={isSocial ? "follow-group" : "info-group"}>
        <h3 title="More">{title}</h3>
        <ul>
            {Links.map((link) => (
                <li key={link.id}>
                    {isSocial ? (
                        <a href={link.href} target="_blank">
                            <link.icon/>
                        </a>
                    ) : (
                        <Link to={link.href} smooth={true} duration={500} >
                        {link.label}
                        </Link>
                    ) }
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterLinkGroup