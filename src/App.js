import FooterBox from "./components/FooterBox";
import Home from "./components/Home";
import LowerHome from "./components/LowerHome";
import Menu from "./components/Menu";
import UpperHome from "./components/UpperHome";
import stars from "./images/stars.svg";
import apple from "./images/Vector.svg";
import google from "./images/google.svg";
import tweet from "./images/tweet.svg";
import insta from "./images/insta.svg";

function App() {
  return (
    <>
      <Menu />
      <div className="flex flex-col  h-screen  overflow-y-scroll relative bg-black">
        <img
          src={stars}
          className="w-screen h-screen absolute pb-10"
          alt="stars"
        />

        <UpperHome />
        <div className="flex justify-center items-center absolute left-72 top-52">
          <Home />
        </div>
        <LowerHome />
        <footer className="px-16 gap-12 absolute -bottom-40 flex justify-between items-center">
          <div className="flex justify-between items-center gap-10">
            <FooterBox image={apple} text="APP STORE" />
            <FooterBox image={google} text="GOOGLE PLAY" />
          </div>
          <div>
            <p className="text-white  w-4/5 ms-auto pb-8">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </p>
          </div>
          <div className="flex justify-between items-center gap-10">
            <img src={tweet} alt="Twitter" className="w-32"></img>
            <img src={insta} alt="Instagram" className="w-32"></img>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
