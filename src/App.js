import ExpenceItems from "./components/Expences/ExpenceItems";
import ExpenceForm from "./components/Expences/ExpenceForm";
function App() {
   const list=[];
   let d=new Date();
  const expencelist=[
    {
      id:1,
      title:"food",
      price:30,
      location:"delhi"
    },
    {
      id:2,
      title:"fuel",
      price:100,
      location:"palika bazar,delhi"
    },
    {
      id:3,
      title:"movie",
      price:200,
      location:"pvr cinemas"
    }
  ]
console.log(d)
  for(let i=0;i<=expencelist.length-1;i++){
list.push(<ExpenceItems 
  date={d}
  id={expencelist[i].id}
  title={expencelist[i].title} 
  price={expencelist[i].price} 
  location={expencelist[i].location}>
  </ExpenceItems>)
  }

  
  return (
      <div>
        <ExpenceForm/>
      <h1>lets start</h1>
  <ul>{list}
  </ul>
    </div>
  )
}

export default App;
