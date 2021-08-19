import { Tooltip, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import { CONSTANTS } from "theme";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import React from "react";
import { TitleAvatar } from "./TitleAvatar";

const useStyles = makeStyles((theme) => ({
  tile: CONSTANTS.tile,
  tileBar: {
    height: CONSTANTS.tileBar.height,
    backgroundColor: fade(theme.palette.grey[900], 0.5),
  },
  tileTitleWrap: { marginLeft: "8px" },
  tileSubtitle: {
    overflow: "auto",
    whiteSpace: "normal",
    textOverflow: "clip",
  },
  callName: { color: theme.palette.common.white },
  fullName: {
    color: theme.palette.grey[50],
    fontSize: ".78rem",
    lineHeight: 1.1,
  },
  owner: {
    color: theme.palette.grey[300],
    fontSize: ".78rem",
    fontStyle: "italic",
    lineHeight: 1.1,
  },
}));

export function DogTile(props) {
  const classes = useStyles();
  const { data } = props;

  const {
    year,
    callName,
    title,
    prefix,
    regName,
    suffix,
    regNum,
    owner,
    city,
    state,
  } = data;

  const fullName = [prefix, regName, suffix].filter(Boolean).join(" ");
  const imageName = `${regName}_${title.id}.jpg`.replaceAll("'", "_");
  //console.log(year, callName, imageName);

  return (
    <GridListTile className={classes.tile} key={regNum}>
      <img
        className={classes.img}
        src={`${CONSTANTS.path.images}/dogs/${imageName}`}
        alt={callName}
      />

      <GridListTileBar
        classes={{
          root: classes.tileBar,
          titleWrap: classes.tileTitleWrap,
          subtitle: classes.tileSubtitle,
        }}
        title={
          <Typography variant="h4" classes={{ root: classes.callName }}>
            {callName}
          </Typography>
        }
        subtitle={
          <>
            <Tooltip title={fullName}>
              <Typography
                variant="caption"
                classes={{ root: classes.fullName }}
              >
                {fullName}
              </Typography>
            </Tooltip>
            <Typography variant="caption" classes={{ root: classes.owner }}>
              , {owner}
            </Typography>
          </>
        }
        actionIcon={<TitleAvatar title={title} year={year} />}
      />
    </GridListTile>
  );
}
