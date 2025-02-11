import "./App.css"
import Genealogy from "./components/tree";
import Welcomepage from "./components/welcomepage";
import "./index.css"
function App() {
  // const [token, setToken]=useState("")
  // useEffect(()=>{
  //   const hash=window.location.hash;
  //   const _token=hash.split("&")[0].split("=")[1]
  //   window.localStorage.setItem("token",_token);
  //   setToken(_token)

  // },[])
  return (
   <div>
{/* <Welcomepage/> */}
<Genealogy/>

   </div>
   
    
   
  
 
  )
     
   
}

export default App;
