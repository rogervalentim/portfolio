import "./CardTechnologies.css"

const CardTechnologies = ({ name, icon }) => {
    return (
        <>
            <div className="card-technologie">
                <img src={icon} alt={name} />
                <p>{name}</p>
            </div>
        </>
    )
}

export default CardTechnologies