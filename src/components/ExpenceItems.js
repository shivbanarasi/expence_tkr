import './ExpenceItem.css';
function ExpenceItems(props){
    // const list=["Food","petrol","movies"];
    // const price=[10,100,200];
    // const locationofexpen=["raju dhaba","reliance patrol pump,delhi",'pvr cinema']
return(
    <div className='expItem'>
        <div>
        {/* <h1>Expence Items</h1> */}
       <div><h5 id='itemlist'>{props.title} Rs {props.price} at {props.location}</h5></div> 
       
        </div>
        
    </div>

);
}
export default ExpenceItems;