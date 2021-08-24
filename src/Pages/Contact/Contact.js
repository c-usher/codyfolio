import { Grid, Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./contact.css";

export default function Contact() {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {}, [clicked]);
  const onClick = (e) => {
    setClicked(true);
    navigator.clipboard.writeText("usher.cody@outlook.com");
  };

  return (
    <div className="contact-page">
      <div className="App">
        <h1 className="name">Cody Usher</h1>

        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item className="icons" onClick={onClick}>
            <Link color="inherit" className="links">
              <i className="fas fa-envelope fa-5x"></i>
            </Link>
            {clicked && (
              <div className="copied">
                Usher.Cody@outlook.com has been Copied
              </div>
            )}
          </Grid>
          <Grid item className="icons">
            <Link
              href="https://www.linkedin.com/in/codyusher/"
              color="inherit"
              className="links"
            >
              <i className="fab fa-linkedin-in fa-5x"></i>
            </Link>
          </Grid>
          <Grid item className="icons">
            <Link
              href="https://github.com/c-usher"
              color="inherit"
              className="links"
            >
              <i className="fab fa-github fa-5x"></i>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
