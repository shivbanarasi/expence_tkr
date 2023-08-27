function ExpenceDetail(props){
    const title=props.title;
    const price=props.price;
    const location=props.location;
    return(
        <>
        <div className='exp_title'> {title}</div>
       <div className='exp_price'> Rs {price}</div> 
       <div className='exp_location'>{location}</div>
       </>  
    )
}

export default ExpenceDetail;