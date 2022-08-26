import { useState } from 'react';
import Card from './components/Cards/Card';
import Loading from './components/Loading/Loading';
import Nav from './components/Navbar/Nav';




function App() {
  const [isloading, setIsloading] = useState(false);
  setInterval(() => { setIsloading(true); }, 2000);
  return (
    <div className="App">

      {!isloading ? <div> <Loading/> </div> :
       <div> 
        
       <Nav/>  

       <Card/> 
       </div>}
    </div>
  );
}

export default App;
