import awards from "../../Data/awards"
const Awards = () => {
  return (
    <div className="education">
    <h4 className="label">Awards</h4>
    <ul className="education-list">
      {awards.map((item, index)=>(
        <li className="item" key={index}>
        <span className="year">{item.year}</span>
        <p><span>{item.degree}</span> - {item.country}</p>
        </li>
      ))}
    </ul>
   </div>
  )
}

export default Awards