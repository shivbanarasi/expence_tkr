import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
import ExpenceDetail from './ExpenceDetail';
function ExpenceItems(props){
    const date=props.date;
    const title=props.title;
    const price=props.price;
    const location=props.location;
    
return(
    <div className='expItem'>
       
       <div className='exp_disp'>
        <ExpenceDate date={date}/>
        <ExpenceDetail title={title} price={price} location={location} />
       </div> 
        </div>
   

);
}
export default ExpenceItems;