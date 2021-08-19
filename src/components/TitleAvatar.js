import { Avatar, Tooltip, Typography } from "@material-ui/core";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatarDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 60,
    background:
      "linear-gradient(to right, transparent, transparent 15px, #002060 15px, #002060 25px, #ffffff 25px, #ffffff 35px, #820000 35px, #820000 45px, transparent 45px)",
  },
  avatar: {
    color: theme.palette.common.white,
    boxShadow: theme.shadows[6],
    height: 40,
    width: 60,
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
  },
}));

export function TitleAvatar(props) {
  const classes = useStyles();
  const { title, year } = props;

  const { id, name, color, border } = title ?? {};

  return (
    <Tooltip title={name}>
      <div className={classes.avatarDiv}>
        <Avatar
          aria-label={id}
          style={{
            backgroundColor: color,
            border: `2px solid ${title.border}`,
          }}
          classes={{ root: classes.avatar }}
        >
          <Typography
            style={{
              color: border,
              fontWeight: "bold",
            }}
          >
            {id}
          </Typography>
          <Typography
            variant="caption"
            style={{
              color: border,
              lineHeight: 1,
            }}
          >
            {year}
          </Typography>
        </Avatar>
      </div>
    </Tooltip>
  );
}
