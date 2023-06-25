import React from "react";
import "./Projects.css";
import Carousel1 from "./Carousel/Carousel1";
import GP1 from "./Assets/GovernmentProjects/img1.png";
import GP2 from "./Assets/GovernmentProjects/img2.png";
import GP3 from "./Assets/GovernmentProjects/img3.png";
import ALH1 from "./Assets/AuditoriumLH/img1.png";
import ALH2 from "./Assets/AuditoriumLH/img2.png";
import ALH3 from "./Assets/AuditoriumLH/img3.png";
import CMH1 from "./Assets/ConventionMH/img1.png";
import CMH2 from "./Assets/ConventionMH/img2.png";
import CMH3 from "./Assets/ConventionMH/img3.png";
import CO1 from "./Assets/CorporateOffice/img1.png";
import CO2 from "./Assets/CorporateOffice/img2.png";
import CO3 from "./Assets/CorporateOffice/img3.png";
import E1 from "./Assets/Education/img1.png";
import E2 from "./Assets/Education/img2.png";
import E3 from "./Assets/Education/img3.png";
import CHC1 from "./Assets/CommercialHC/img1.png";
import CHC2 from "./Assets/CommercialHC/img2.png";
import CHC3 from "./Assets/CommercialHC/img3.png";
import S1 from "./Assets/Studio/img1.png";
import S2 from "./Assets/Studio/img2.png";
import S3 from "./Assets/Studio/img3.png";
import WP1 from "./Assets/WorshipPlaces/img1.png";
import WP2 from "./Assets/WorshipPlaces/img2.png";
import WP3 from "./Assets/WorshipPlaces/img3.png";
import SC1 from "./Assets/SportsComplex/img1.png";
import SC2 from "./Assets/SportsComplex/img2.png";
import SC3 from "./Assets/SportsComplex/img3.png";
import HC1 from "./Assets/Healthcare/img1.png";
import HC2 from "./Assets/Healthcare/img2.png";
import HC3 from "./Assets/Healthcare/img3.png";

export default function Projects() {
  const govtP = [GP1, GP2, GP3, GP1];
  const audLH = [ALH1, ALH2, ALH3, ALH1];
  const conMH = [CMH1, CMH2, CMH3, CMH1];
  const corpO = [CO1, CO2, CO3, CO1];
  const educa = [E1, E2, E3, E1];
  const comHC = [CHC1, CHC2, CHC3, CHC1];
  const studi = [S1, S2, S3, S1];
  const worhP = [WP1, WP2, WP3, WP1];
  const sporC = [SC1, SC2, SC3, SC1];
  const healC = [HC1, HC2, HC3, HC1];
  return (
    <>
      <div className="projs-landing">
        <h2 className="projs-head">
          featured
          <br />
          <span>Projects</span>
        </h2>
        <p>
          In years past, acoustic treatments were all about form and function.
          But new materials are changing the way the wall and ceiling industry
          can use acoustic treatments as part of the aesthetics of a space, and
          the sky is the limit.
          <br />
          <br />
          Acoustical treatment solutions are no exception, and play an important
          role in the redesign of workspaces, schools, healthcare facilities,
          hospitality venues, and so on.
          <br />
          <br />
          Now acoustic products are getting the attention they deserve and are
          no longer an afterthought, acoustical treatments are just as important
          as décor and aesthetics & décor while controlling sound.
          <br />
          <br />
          Acoustical products are moving beyond functionality and are being used
          as art, advertising images and decoration.
          <br />
          <br />
          Our new ranges of products are an amalgamation of Acoustics + Design
          delivering high performance and yet a design option to be incorporated
          in a space, making our solution easier for the A&D Community to
          specify.
        </p>
      </div>
      <div className="projs-cars">
        <div className="proj-1">
          <h2>#government projects</h2>
          <Carousel1 images={govtP} />
        </div>
        <div className="proj-1">
          <h2>#auditorium & lecture hall</h2>
          <Carousel1 images={audLH} />
        </div>
        <div className="proj-1">
          <h2>#convention & multipurpose hall</h2>
          <Carousel1 images={conMH} />
        </div>
        <div className="proj-1">
          <h2>#corporate office</h2>
          <Carousel1 images={corpO} />
        </div>
        <div className="proj-1">
          <h2>#education</h2>
          <Carousel1 images={educa} />
        </div>
        <div className="proj-1">
          <h2>#commercial & home cinemas</h2>
          <Carousel1 images={comHC} />
        </div>
        <div className="proj-1">
          <h2>#studio</h2>
          <Carousel1 images={studi} />
        </div>
        <div className="proj-1">
          <h2>#worship place</h2>
          <Carousel1 images={worhP} />
        </div>
        <div className="proj-1">
          <h2>
            #sports complex (stadium, gym, swimming area and shooting range)
          </h2>
          <Carousel1 images={sporC} />
        </div>
        <div className="proj-1">
          <h2>#healthcare</h2>
          <Carousel1 images={healC} />
        </div>
      </div>
    </>
  );
}
