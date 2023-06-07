import { CONSTANTS, useGlobalStyles } from "theme";
import { Container, Link, Typography } from "@material-ui/core";

import React from "react";

export function Application() {
  const globalClasses = useGlobalStyles();

  return (
    <Container classes={{ root: globalClasses.container }} maxWidth={false}>
      <Typography variant="h2">
        Versatile Basenji Program Application
      </Typography>

      <Typography variant="h6" color="secondary">
        Interactive Application (**NEW**)
      </Typography>

      <Typography paragraph={true}>
        The Versatile Basenji Program created a new interactive application in
        2022. This new format allows you to choose titles from drop down lists
        and the form will calculate your dog's award level. The new format
        requires Microsoft Excel.
      </Typography>
      <ul>
        <li>
          <Link
            title="Interactive Application"
            href={`${CONSTANTS.path.application.interactive}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Interactive Application</b>
          </Link>
        </li>
        <li>
          <Link
            title="Titles list used in the Interactive Application"
            href={`${CONSTANTS.path.application.interactiveList}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Interactive Application - Titles List only
          </Link>
        </li>
      </ul>

      <Typography variant="h6">Printable Application</Typography>

      <Typography paragraph={true}>
        Because not everyone has access to Microsoft Excel and some just like
        doing things on paper, the printable format is still available. This
        lengthy package includes the FAQ and the title listing.
      </Typography>
      <ul>
        <li>
          <Link
            title="Printable Application"
            href={`${CONSTANTS.path.application.printable}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Printable Application
          </Link>
        </li>
      </ul>

      <Typography paragraph={true}>
        If you notice any discrepancies between the Interactive and Printable
        titles lists or have any other questions or feedback, direct them to{" "}
        <Link title="More Information" href="mailto:lacroix@animalink.com">
          Suzanne LaCroix
        </Link>
        .
      </Typography>
    </Container>
  );
}
