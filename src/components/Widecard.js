export default function Widecard (props) {
    return(
        <div className="widecard">
            <h2>{props.title}</h2>
            <h3>{props.place}</h3>
            <h4>{props.from} - {props.to}</h4>
            <h5>{props.description}</h5>
            <h6>{props.modules}</h6>
            <br/>
            <h5>{props.description2}</h5>
            <h6>{props.modules2}</h6>
            <br/>
            <h5>{props.description3}</h5>
            <h6>{props.modules3}</h6>
        </div>
    );
};