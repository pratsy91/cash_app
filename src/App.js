import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="flex flex-col  h-screen bg-black overflow-y-scroll">
        <Menu />
        <div className="flex justify-center items-center">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
