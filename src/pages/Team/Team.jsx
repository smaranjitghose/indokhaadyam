import React, { useState, useEffect } from "react";
import "./team.css";
import anush_bhatia from "../../assets/anush_bhatia.png";
import smaranjit_ghose from "../../assets/smaranjit_ghose.jpg";
import { Card } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GlobalStyle from "../../globalStyles";
import Footer from "../../components/Footer/Footer";

function Team() {
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
      <div className="Team">
        {/* <!-- Project Maintainer Sub Section --> */}
        <p className="titleMain">Project Maintainers</p>
        <div className="projectMaintainers">
          {maintainerSection.map((item, index) => (
            <Card key={index}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
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
