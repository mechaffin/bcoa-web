import React, { useState } from "react";

import { DogTile } from "./DogTile";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Typography } from "@material-ui/core";
import { groupBy } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // maxWidth: 1220,
    // minWidth: 760,
    justifyContent: "center",
  },
  gridListSubheaderTile: {
    width: "100%",
    margin: 2,
    marginTop: 16,
    marginBottom: 4,
  },
  gridListSubheader: {
    color: "#000",
    backgroundColor: theme.palette.grey[100],
    margin: 4,
    boxShadow: theme.shadows[4],
  },
}));

export function DogTileList(props) {
  const classes = useStyles();
  const {
    data,
    titles,
    groupByField,
    getGroupLabel,
    sortGroups,
    sortGroupMembers,
  } = props;

  const grouped = groupBy(data, groupByField);

  const sorted = Object.entries(grouped)
    .sort(sortGroups)
    .map((group) => [group[0], group[1].sort(sortGroupMembers)]);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {sorted.map(([key, value], i) => (
          <>
            <GridListTile
              key={`group-${key}`}
              classes={{ root: classes.gridListSubheaderTile }}
              cols={2}
            >
              <ListSubheader
                component="div"
                classes={{ root: classes.gridListSubheader }}
              >
                <Typography variant="h3">
                  {getGroupLabel(key, titles)}
                </Typography>
              </ListSubheader>
            </GridListTile>
            {value.map((item, j) => (
              <DogTile key={`dog-${i}-${j}`} data={item} />
            ))}
          </>
        ))}
      </GridList>
    </div>
  );
}
