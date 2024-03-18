import "./button.css";


function Button(props){

    const {text, onClick} = props;

    return(
        <button onClick={onClick} className="button" type="submit">{text}</button>
    )
}


export default Button;
