import './ExpenceItem.css';
function ExpenceItems(){
    const list=["Food","petrol","movies"];
    const price=[10,100,200];
    const locationofexpen=["raju dhaba","reliance patrol pump,delhi",'pvr cinema']
return(
    <div className='expItem'>
        <div>
        <h1>Expence Items</h1>
        <div><h5 id='itemlist'>{list[0]} Rs {price[0]} at {locationofexpen[0]}</h5></div>
        
       <div><h5 id='itemlist'>{list[1]} Rs {price[1]} at {locationofexpen[1]}</h5></div> 
       <div><h5 id='itemlist'>{list[2]} Rs {price[2]} at {locationofexpen[2]}</h5></div> 
        </div>
        
    </div>

);
}
export default ExpenceItems;