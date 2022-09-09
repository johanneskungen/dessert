import dessert from "./dessert.svg";
import small_dessert from './small_dessert.svg'

function App() {
  return (
    <>
      <div className="container">
        <img src={dessert} alt="dessert" className="dessert hidden md:block aspect_big" />
        <img src={small_dessert} alt="small dessert" className="dessert md:hidden aspect_small"/>
      </div>
      <div className="flex justify-center text-xl md:text-3xl pt-72">
      <p className="header">The SVG is working</p>
      </div>
    </>
  );
}

export default App;
