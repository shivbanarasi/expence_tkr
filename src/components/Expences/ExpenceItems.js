
import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';

import ExpenceDetail from './ExpenceDetail';
import  { useState } from 'react';

function ExpenceItems(props){
    const id=props.id
    const date=props.date;
    const title=props.title;
    const price=props.price;
    const location=props.location;
    const [pr,setTitle]=useState(price);
    const [tit,setTit]=useState(title)

  //console.log(price)

    function addevent(){
      
        setTitle('$100')
    }
    function settitle(){
        setTit("updated!")
    }
   
return(

<div className='expItem'>
        
        <div id={id} className='exp_disp'>
            
        <ExpenceDate date={date}/>
        <ExpenceDetail title={tit} price={pr} location={location} delete={id} />
        <button onClick={addevent}>changeTO$100</button>
        <button onClick={settitle}>change title</button>
        </div> 
        </div>
);
}
export default ExpenceItems;