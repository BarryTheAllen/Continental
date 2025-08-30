import contact from "../../Data/contact"

const ContactLeft = () => {
  return (
    <div className="contact-left">
        <h2>Let's discuss your trip</h2>
        <ul className="contact-list">
            {contact.map(item => (
                <li key={item.id}>
                    <h3><item.icon/> {item.title}</h3>
                    <span><a href={item.link}>{item.subtitle}</a></span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ContactLeft