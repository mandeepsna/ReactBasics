
const Button=(Props)=>
{
    return( <button onClick={Props.eventHandler} className='btn btn-primary' disabled={Props.disable} >{Props.children}</button>

    );
}

export default Button