

function Card(props) {
    const alt = '' + props.title;

    return (
        <div>
            <img src={props.image} alt={alt} />
            <h2>{props.title}: TITLE</h2>
            <p>{props.description} DESCRIPTION</p>
        </div>
    );
}


export default Card;