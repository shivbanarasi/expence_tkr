
import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
import ExpenceDetail from './ExpenceDetail';
function ExpenceItems(props){
    const id=props.id
    const date=props.date;
    const title=props.title;
    const price=props.price;
    const location=props.location;

    function addevent(id){
        console.log(id)
        console.log('get clicked')
        // console.log(document.getElementById(id))
        // document.getElementById(id).remove()
    }
   
return(
    <div className='expItem'>
       
       <div id={id} className='exp_disp'>
        <ExpenceDate date={date}/>
        <ExpenceDetail title={title} price={price} location={location} delete={id} />
        <button onClick={addevent(id)}>delete</button>
       </div> 
        </div>
   

);
}
export default ExpenceItems;