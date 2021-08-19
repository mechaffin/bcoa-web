import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { TitleAvatar } from "./TitleAvatar";
import { Typography } from "@material-ui/core";
import { isEmpty } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TitleList(props) {
  const classes = useStyles();
  const { titles } = props;

  const titleArray = Object.entries(titles ?? {});
  console.log({ props, titles, titleArray });

  if (isEmpty(titleArray)) return <Typography>Loading...</Typography>;

  return (
    <List className={classes.root}>
      {titleArray.map((title) => (
        <ListItem>
          <ListItemAvatar>
            <TitleAvatar title={title} />
          </ListItemAvatar>
          <ListItemText
            primary={title.name}
            secondary={`${title.optionA} OR ${title.optionB}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
