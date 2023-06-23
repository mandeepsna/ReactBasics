
const Button=(Props)=>
{
    return( <button onClick={Props.eventHandler} className='btn btn-primary' >{Props.children}</button>

    );
}

export default Button