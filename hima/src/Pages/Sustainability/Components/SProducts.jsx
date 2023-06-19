import React from "react";
import "../Sustainability.css";

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
          <img src="https://picsum.photos/200/200" alt="" />
          <h4>Indoor Air Quality</h4>
        </div>
        <div>
          <img src="https://picsum.photos/200/200" alt="" />
          <h4>Local Manufacturing</h4>
        </div>
        <div>
          <img src="https://picsum.photos/200/200" alt="" />
          <h4>Recylability</h4>
        </div>
        <div>
          <img src="https://picsum.photos/200/200" alt="" />
          <h4>Resuability</h4>
        </div>
        <div>
          <img src="https://picsum.photos/200/200" alt="" />
          <h4>Acoustics & Thermal Insulation</h4>
        </div>
        <div>
          <img src="https://picsum.photos/200/200" alt="" />
          <h4>Non-Toxic Flame</h4>
        </div>
      </div>
      <div className="extracts">
        <img src="https://picsum.photos/400/250" alt="" />
        <img src="https://picsum.photos/400/250" alt="" />
        <img src="https://picsum.photos/400/250" alt="" />
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
        <img src="https://picsum.photos/250/250" alt="" />
        <img src="https://picsum.photos/250/250" alt="" />
        <img src="https://picsum.photos/250/250" alt="" />
      </div>
    </div>
  );
}
