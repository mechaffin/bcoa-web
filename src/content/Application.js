import { Container, Link, Typography } from "@mui/material";

import { CONSTANTS } from "theme";

export function Application() {
  return (
    <Container sx={{ maxWidth: 1042 }} maxWidth={false}>
      <Typography variant="h2">
        Versatile Basenji Program Application
      </Typography>

      <Typography sx={{ mb: 2 }}>
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
        <li>
          <Link
            title="Rainbow Form"
            href={`${CONSTANTS.path.application.rainbowForm}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Rainbow Form - Printable PDF
          </Link>
          <ul>
            <li>
              Use this printable form to update your dog's final list of titles
              achieved during their lifetime. You may also submit an photo.
            </li>
            <li>
              If you believe your dog has achieved a new award level prior to
              passing, please submit either the interactive or printable
              application instead.
            </li>
            <li>Submit via email</li>
          </ul>
        </li>
      </ul>

      <Typography sx={{ mb: 2 }}>
        If you have any questions or feedback, direct them to{" "}
        <Link title="More Information" href="mailto:lacroix@animalink.com">
          Suzanne LaCroix
        </Link>
        .
      </Typography>
    </Container>
  );
}
