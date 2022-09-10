import "./IntroComp.css";
import Header from "./Header";
import Logo from "./Logo";

function IntroComp() {
  return (
    <div id="intro" className="intro">
      <div id ="navbar">
        <Header />
      </div>
      <div className="center">
        <Logo />
      </div>
    </div>
  );
}

export default IntroComp;
