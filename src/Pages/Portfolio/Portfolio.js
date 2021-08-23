import React from "react";
import "./portfolio.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import inspectImage from "../../Images/inspect-image.jpg";
import soulImage from "../../Images/souls-adventure.png";
import tweeterImage from "../../Images/tweeter.png";
import escapeImage from "../../Images/escape-game.png";
import phaserLogo from "../../Images/Phaser 2D No Glow.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 545,
  },
});

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className="cards">
      {/* //** Start of Inspection Tracker Card */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Inspection Application"
            height="200"
            src={inspectImage}
            title="Inspection Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Property Inspection Application
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A fullstack Mern application made to organize and keep track of
              status of inspections, notes, and preferences for each unit. This
              app has user creation, verification, and validation. The user can
              also send a forgot password email and reset your new password with
              OTP.
            </Typography>
            <hr />

            <Typography variant="body2" color="textSecondary">
              <i className="fab fa-js fa-3x"></i>
              <i className="fab fa-react fa-3x"></i>
              <span
                className="iconify-inline"
                data-icon="akar-icons:redux-fill"
                data-width="40"
              ></span>
              <span
                className="iconify-inline"
                data-icon="cib:redis"
                data-width="40"
              ></span>
              <span
                className="iconify-inline"
                data-icon="cib:mongodb"
                data-width="40"
              ></span>
              <span
                className="iconify-inline"
                data-icon="logos:express"
                data-width="40"
              ></span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Front End Git
          </Button>
          <Button size="small" color="primary">
            Back End Git
          </Button>
        </CardActions>
      </Card>
      {/* //** Start of Souls Adventure*/}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Souls Application"
            height="200"
            src={soulImage}
            title="Souls Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Souls Adventure
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The hero, Soul, finds himself in a small grass field with a
              graveyard, a castle and a village. Off in the distance he can see
              a mob of little green men running towards him. Luckily with his
              black hole powers, soul might have a chance at survival.
            </Typography>
            <hr />

            <Typography variant="body2" color="textSecondary">
              <i className="fab fa-js fa-3x"></i>
              <i class="fab fa-html5 fa-3x"></i>
              <img src={phaserLogo} className="phaser-logo" />
              <span
                class="iconify-inline"
                data-icon="cib:heroku"
                data-width="40"
              ></span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Git
          </Button>
          <Button size="small" color="primary">
            Try
          </Button>
        </CardActions>
      </Card>
      {/* //** Start of Tweeter Group Project */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Tweeter Application"
            height="200"
            src={tweeterImage}
            title="Tweeter Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tweeter Application
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A fun, more colorful take on twitter. On this project I used Ruby
              on Rails to build out the back end, JavaScript, and HTML for the
              front-end, and Tailwind CSS for the styling.
            </Typography>
            <hr />

            <Typography variant="body2" color="textSecondary">
              <i className="fab fa-js fa-3x"></i>
              <i class="fab fa-html5 fa-3x"></i>
              <i class="fab fa-css3-alt fa-3x"></i>
              <span
                class="iconify-inline"
                data-icon="codicon:ruby"
                data-width="40"
              ></span>
              <span
                class="iconify-inline"
                data-icon="cib:heroku"
                data-width="40"
              ></span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Git
          </Button>
          <Button size="small" color="primary">
            Try
          </Button>
        </CardActions>
      </Card>
      {/* //** Start of Escape Project */}
      <div className="row-two">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Tweeter Application"
              height="200"
              src={escapeImage}
              title="Tweeter Application"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Escape!
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                In the game, the user is given randomly generated directional
                cards to navigate through a spaceship. As the user navigates,
                they are attacked by enemies. The goal is to defeat the boss and
                make it to the escape pod.
              </Typography>
              <hr />

              <Typography variant="body2" color="textSecondary">
                <i className="fab fa-js fa-3x"></i>
                <i class="fab fa-html5 fa-3x"></i>
                <i class="fab fa-css3-alt fa-3x"></i>
                <span
                  class="iconify-inline"
                  data-icon="akar-icons:jquery-fill"
                  data-width="40"
                ></span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Git
            </Button>
            <Button size="small" color="primary">
              Try
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
