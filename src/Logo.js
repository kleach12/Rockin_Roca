import "./Logo.css";
import "./Images/rocfin1.png";

function Logo() {
  return (
    <div>
      <img id = 'logo' src= {require("./Images/rocfin1.png")} alt="Roc-N-Roca Logo" />
    </div>
  );
}

export default Logo;
