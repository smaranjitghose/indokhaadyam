import React, { useState, useEffect } from "react";
import "./team.css";
import anush_bhatia from "../../assets/anush_bhatia.png";
import smaranjit_ghose from "../../assets/smaranjit_ghose.jpg";
import { Card } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GlobalStyle from "../../globalStyles";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/Navbar/mobilenavbar";
import { useMediaQuery } from "react-responsive";

function Team() {
  const isMobile = useMediaQuery({ maxWidth: "700px" })
  const maintainerSection = [
    {
      name: "Smaranjit Ghose",
      title: "Lead Developer",
      githubLink: "https://github.com/smaranjitghose",
      linkedinLink: "https://www.linkedin.com/in/smaranjitghose/",
      img: smaranjit_ghose,
    },
    {
      name: "Anush Bhatia",
      title: "Lead Developer",
      githubLink: "https://github.com/anushbhatia",
      linkedinLink: "https://www.linkedin.com/in/anushbhatia/",
      img: anush_bhatia,
    },
  ];

  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/smaranjitghose/indokhaadyam/contributors?per_page=1000"
    )
      .then((res) => res.json())
      .then((data) => {
        setContributors(
          data.filter(
            (element) =>
              !(
                element.login === "smaranjitghose" ||
                element.login === "anushbhatia"
              )
          )
        );
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      
      {!isMobile && <Navbar />}
      {isMobile && <MobileNavbar />}



      <div className="Team">
        {/* <!-- Project Maintainer Sub Section --> */}
        <p className="titleMain">Project Maintainers</p>
        <div className="projectMaintainers">
          {maintainerSection.map((item, index) => (
            <Card key={index} style={{}}>
              <Card.Img variant="top" src={item.img} style={{borderRadius: 200,}}/>
              <Card.Body style={{backgroundColor : "#fdd835", borderRadius : "25px"}}>
                <Card.Title>{item.name}</Card.Title>
                <p className="maintainer_title">{item.title}</p>
                <div className="logo_div">
                  <a href={item.githubLink} className="github_icon">
                    <FaGithub />
                  </a>
                  <a href={item.linkedinLink} className="linkedin_icon">
                    <FaLinkedin />
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
        {/* <!-- Contributors Sub Section --> */}
        <p className="titleMain">Clan of Contributors</p>
        <div className="team_container">
          {contributors.map((c) => (
            <figure
              className="position_relative d_inline_block text_center grid_wd_100 figure"
              key={c.login}
            >
              <img
                src={c.avatar_url}
                className="profile_img"
                alt="Profile"
              />
              <figcaption className="position_absolute grid_wd_100 va_top">
                <div className="fig_caption_text">
                  <a href={c.html_url} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
