
const Button = (prop) => {
   
    return (
        <button type="button" id={prop.id} className={prop.className}> {prop.text} </button>
    )
}

export default Button;
