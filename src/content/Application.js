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

      <Typography paragraph={true}>
        The Versatile Basenji Program created a new interactive application in
        2022. While the previous printable format has been retired (2024), you
        can still submit your dog's application by printing and filling out a
        hardcopy.
      </Typography>
      <ul>
        <li>
          <Link
            title="Application - Interactive Excel File"
            href={`${CONSTANTS.path.application.interactive}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Application - Interactive</b>
          </Link>
          <ul>
            <li>Requires Microsoft Excel</li>
            <li>
              Form calculates your dog's award evel based on the titles chosen
              from drop down lists
            </li>
            <li>Submit via email</li>
          </ul>
        </li>
        <li>
          <Link
            title="Application - Printable PDF"
            href={`${CONSTANTS.path.application.printable}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Application - Printable PDF
          </Link>
          <ul>
            <li>Print a hardcopy and fill out</li>
            <li>Submit via email or regular mail</li>
          </ul>
        </li>
        <li>
          <Link
            title="Titles List"
            href={`${CONSTANTS.path.application.titlesList}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Titles List - Printable PDF
          </Link>
          <ul>
            <li>Printable listing (or grid) of titles that at each level</li>
            <li>
              This listing is also included in the Interactive format. This is
              provided as a standalone printable version.
            </li>
          </ul>
        </li>
      </ul>

      <Typography paragraph={true}>
        If you have any questions or feedback, direct them to{" "}
        <Link title="More Information" href="mailto:lacroix@animalink.com">
          Suzanne LaCroix
        </Link>
        .
      </Typography>
    </Container>
  );
}
