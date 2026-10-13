import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Burger from './Burger.jsx'

function App() {
  
  return(
    // <> </> is used to enclose all of the components into one thing
    //Returns can only return ONE THING, hence, the <></>
    //<Header/> and <Header></Header> are the same thing
    <>
      <Header/> 
      <Footer/>
      <Burger/>
    </> 
  );
}

export default App
