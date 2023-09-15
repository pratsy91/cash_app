import Home from "./components/Home";
import LowerHome from "./components/LowerHome";
import Menu from "./components/Menu";
import UpperHome from "./components/UpperHome";
import stars from "./images/stars.svg"

function App() {
  return (
    
    <>
     <div className="flex flex-col  h-screen  overflow-y-scroll relative bg-black">
     <img src={stars} className="w-screen h-screen absolute"/>
        <Menu />
        <UpperHome />
        <div className="flex justify-center items-center absolute left-72 top-20 bg-stars">
          <Home />
        </div>

        <LowerHome />
      </div></>
     
    
  );
}

export default App;
