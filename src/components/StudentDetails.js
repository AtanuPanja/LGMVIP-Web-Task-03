import linkIcon from '../assets/link-external-regular-24.png'
import './StudentDetails.css'


const StudentDetails = ({ details}) => {
    let websiteLink = details.websiteLink
    if(!websiteLink.startsWith("https://")){
      websiteLink = "https://"+websiteLink
    }
    return (
      <div className="enrolled__details">
        <div className="details__info">
          <p>{details.name}</p>
          <p>{details.gender}</p>
          <p>{details.email}</p>
          <p>{details.skills}</p>
          <a className="info__websiteLink" href={websiteLink} target="_blank" rel="noreferrer"><span>Website </span><img src={linkIcon} alt="link"/></a>
        </div>
        <img className="details__image" src={details.image} alt={"user"+details.id}/>
      </div>
    )
}

export default StudentDetails