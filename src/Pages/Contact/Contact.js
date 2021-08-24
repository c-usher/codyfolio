import { Grid } from "@material-ui/core";
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="App">
        <Grid container spacing={3} justify="center">
          <Grid item xs={6} lg={12} className="name">
            <h1>Cody Usher</h1>
          </Grid>
          <Grid item xs={4}>
            <i className="fas fa-envelope fa-6x"></i>
          </Grid>
          <Grid item xs={4}>
            <i className="fab fa-linkedin-in fa-6x"></i>
          </Grid>
          <Grid item xs={4}>
            <i className="fab fa-github fa-6x"></i>{" "}
          </Grid>
        </Grid>
      </div>
    </div>

    // <div>
    //   <h1 className="name">Cody Usher</h1>
    //   <div className="icons">
    //     <i class="fas fa-envelope fa-7x"></i>
    //     <i class="fab fa-linkedin-in fa-7x"></i>
    //     <i class="fab fa-github fa-7x"></i>
    //   </div>
    // </div>
  );
}
