import React from "react";
import "../Sustainability.css";
import IndoorAirQuality from "../Assets/indoorAirQuality.png";
import LocalManufacturing from "../Assets/localManufacturing.png";
import Recyclability from "../Assets/recyclability.png";
import Reusability from "../Assets/reusability.png";
import Acoustics from "../Assets/acousticsTI.png";
import NonToxic from "../Assets/nonToxicF.png";
import Extract1 from "../Assets/extract1.png";
import Extract2 from "../Assets/extract2.png";
import Extract3 from "../Assets/extract3.png";
import Logo1 from "../Assets/logo1.png"
import Logo2 from "../Assets/logo2.png"
import Logo3 from "../Assets/logo3.png"

export default function SProducts() {
  return (
    <div>
      <div className="ecofp">
        <h2>
          eco friendly <span>product</span>
        </h2>
      </div>
      <div className="prod-qualities">
        <div>
          <img src={IndoorAirQuality} alt="" />
          <h4>Indoor Air Quality</h4>
        </div>
        <div>
          <img src={LocalManufacturing} alt="" />
          <h4>Local Manufacturing</h4>
        </div>
        <div>
          <img src={Recyclability} alt="" />
          <h4>Recylability</h4>
        </div>
        <div>
          <img src={Reusability} alt="" />
          <h4>Resuability</h4>
        </div>
        <div>
          <img src={Acoustics} alt="" />
          <h4>Acoustics & Thermal Insulation</h4>
        </div>
        <div>
          <img src={NonToxic} alt="" />
          <h4>Non-Toxic Flame</h4>
        </div>
      </div>
      <div className="extracts">
        <img src={Extract1} alt="" />
        <img src={Extract2} alt="" />
        <img src={Extract3} alt="" />
      </div>
      <div className="ext-txt">
        Himalyan Acoustics <span>Wood Fibre Acoustics Panel</span> are extracted from
        <br />
        <span>Fallen Pine Wood</span> which is procured from
        <br />
        <span>Himachal Pradesh state Forest Corporation Ltd. (Govt entity) INDIA</span>
        <br />
        indirectly providing revenue to maintain forests.
      </div>
      <div className="safetylogos">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
      </div>
    </div>
  );
}
