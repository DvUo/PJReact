import "./cardcomponent.css";

export const CardComponent = ({url,img,title}) => {
  return (
    <>
        <a href={url}>
            <img src={img} alt={title} className="img-card"/>
        </a>
    </>
  )
}
