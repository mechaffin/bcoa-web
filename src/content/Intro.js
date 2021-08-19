import { Container, Typography } from "@material-ui/core";

import React from "react";
import { useGlobalStyles } from "theme";

export function Intro() {
  const globalClasses = useGlobalStyles();

  return (
    <Container classes={{ root: globalClasses.container }} maxWidth={false}>
      <Typography paragraph={true}>
        Welcome to the Basenji of the 21st century - exploding breed myths and
        preconceptions that created barriers to imagining novel sporting goals.
        The Versatile Basenji Program is about getting active with your basenji
        in new sports and activities. It's about training, practice,
        competition, and teamwork. It's about excelling and surpassing goals.
        It’s about celebrating our intelligent and adaptable breed and the
        special human-animal bond we have with them.
      </Typography>
      <Typography paragraph={true}>
        New millennium Basenjis do Conformation and Coursing but they also do
        Agility, and Racing, and Rally Obedience, and Nosework. And guess what?
        Basenjis also do Barn Hunt, and Farm Dog, and Obedience, and Weight
        Pulling too! And they are doing it with confidence and success!
      </Typography>
      <Typography paragraph={true}>
        We always knew basenjis were smart. Smart like a basenji! Is this the
        year you explore your Basenji's versatility?
      </Typography>
      <Typography paragraph={true}>
        To get inspired by the many basenjis that have already demonstrated that
        our breed really can do just about anything, check out the Honor Roll!
      </Typography>
    </Container>
  );
}
