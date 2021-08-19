import { CONSTANTS, useGlobalStyles } from "theme";
import { Container, Link, Typography } from "@material-ui/core";

import React from "react";

export function About() {
  const globalClasses = useGlobalStyles();

  return (
    <Container classes={{ root: globalClasses.container }} maxWidth={false}>
      <Typography variant="h2">About the Versatile Basenji Program</Typography>

      <Typography paragraph={true}>
        The Versatile Basenji Program was created by BCOA members in 2003. It
        recognizes all Basenjis - show, athletes, and pets. The program is
        designed to reward the lifetime accomplishments of your dog. Individuals
        who meet the requirements of the Basenji Versatility Program will
        receive a BCOA medallion and personalized certificate listing the dog's
        name, owners' names, award level achieved, and class year of induction.
        Please note that a dog will receive only ONE BCOA medallion in its
        lifetime, while it may receive advancing levels of certificates. The
        Versatile Basenji Program maintains an "Honor Roll" that recognizes
        those dogs and handlers who have succeeded in demonstrating their
        versatility. Each year, the newest “Class of” awardees on the "Versatile
        Basenji Program Honor Roll" are published in a BCOA publication.
      </Typography>
      <Typography paragraph={true}>
        Getting started is as simple as finding an activity you enjoy doing with
        your Basenji. The Versatile Basenji Program recognizes a wide spectrum
        of activities and achievements in the following categories (also see the{" "}
        <Link
          title="Versatility Application"
          href={`${CONSTANTS.path.application}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Application & Titles List
        </Link>
        ):
        <ul>
          <li>Agility</li>
          <li>Conformation</li>
          <li>Drafting</li>
          <li>Lure (Coursing & Racing)</li>
          <li>Herding (Herding & Treibbal)</li>
          <li>Obedience (Freestyle, Obedience, Rally)</li>
          <li>
            Public Service & Community Outreach (Animal Assisted Activities &
            Therapy, Public Education, Service Dog, Temperament Test)
          </li>
          <li>Team Relay Racing (Flyball, Scent Hurdle Racing)</li>
          <li>
            Scent Work (Barn Hunt, Scent/Nose Work, Search & Rescue, Tracking)
          </li>
          <li>Weight Pulling</li>
          <li>
            Miscellaneous Sports (Back Packing, Frisbee/Disc Dog, Water
            Sports/Dock Dog Diving)
          </li>
        </ul>
      </Typography>

      <Typography paragraph={true}>
        Direct questions about the Versatile Basenji Program to{" "}
        <Link title="More Information" href="mailto:lacroix@animalink.com">
          Suzanne LaCroix
        </Link>
        .
      </Typography>
    </Container>
  );
}
