import { Container, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { getTitleByLevel, sortDesc } from "../utils";

import { DogTileList } from "components/DogTileList";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    padding: 0,
  },
}));

const sortEntriesByKeyDesc = (left, right) => {
  return sortDesc(left[0], right[0]);
};
const sortDogs = (left, right) => {
  const byYear = sortDesc(left.year, right.year);
  if (byYear !== 0) return byYear;

  const byTitle = sortDesc(left.title.level, right.title.level);
  if (byTitle !== 0) return byTitle;

  const byRegName = sortDesc(left.regName, right.regName);
  return byRegName;
};

const Groupings = {
  Year: {
    groupByField: "year",
    getGroupLabel: (key) => {
      return `Class of ${key}`;
    },
    sortGroups: sortEntriesByKeyDesc,
    sortGroupMembers: sortDogs,
  },
  Title: {
    groupByField: "title.level",
    getGroupLabel: (key, titles) => {
      return getTitleByLevel(titles, key).name;
    },
    sortGroups: sortEntriesByKeyDesc,
    sortGroupMembers: sortDogs,
  },
};

export function HonorRoll(props) {
  const classes = useStyles();
  const { isFetching, titles, honorRoll } = props;

  const [grouping, setGrouping] = useState(Groupings.Year);

  return (
    <Container classes={{ root: classes.container }} maxWidth={false}>
      <Typography variant="h2">Versatile Basenji Honor Roll</Typography>

      {isFetching && <Typography>Loading...</Typography>}

      {!isFetching && (
        <DogTileList data={honorRoll} titles={titles} {...grouping} />
      )}
    </Container>
  );
}
