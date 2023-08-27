import ExpenceItems from "./components/ExpenceItems";
function App() {
   const list=[];
  
  const expencelist=[
    {
      title:"food",
      price:30,
      location:"delhi"
    },
    {
      title:"fuel",
      price:100,
      location:"palika bazar,delhi"
    },
    {
      title:"movie",
      price:200,
      location:"pvr cinemas"
    }
  ]

  for(let i=0;i<=expencelist.length-1;i++){
list.push(<ExpenceItems 
  title={expencelist[i].title} 
  price={expencelist[i].price} 
  location={expencelist[i].location}>
  </ExpenceItems>)
  }

  return (
      <div>
      <h1>lets start</h1>
  <ul>{list}</ul>
    </div>
  )
}

export default App;
