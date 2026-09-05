import {
  ImageListItem,
  ImageListItemBar,
  Tooltip,
  Typography,
} from "@mui/material";

import { CONSTANTS } from "theme";
import { TitleAvatar } from "./TitleAvatar";
import { alpha } from "@mui/material/styles";

export function DogTile(props) {
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
  const imageName = `${regName}_${title.id}.jpg`
    .replaceAll("'", "_")
    .replaceAll("‘", "_")
    .replaceAll("’", "_")
    .replaceAll("“", "_")
    .replaceAll("“", "_");

  //console.log(year, callName, imageName);

  return (
    <ImageListItem
      sx={{
        width: CONSTANTS.tile.width,
        height: CONSTANTS.tile.height,
        margin: CONSTANTS.tile.margin,
      }}
      key={regNum}
    >
      <img
        src={`${CONSTANTS.path.images}/dogs/${imageName}`}
        alt={callName}
        style={{
          width: "100%",
          height: CONSTANTS.tile.height,
          objectFit: "cover",
          display: "block",
        }}
      />

      <ImageListItemBar
        sx={{
          height: CONSTANTS.tileBar.height,
          backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.5),
          "& .MuiImageListItemBar-titleWrap": {
            marginLeft: 0,
            paddingLeft: "4px",
            paddingTop: "2px",
            paddingBottom: "2px",
          },
          "& .MuiImageListItemBar-subtitle": {
            overflow: "auto",
            whiteSpace: "normal",
            maxHeight: 70,
            marginRight: 0.25,
          },
        }}
        title={
          <Typography variant="h4" sx={{ color: "common.white" }}>
            {callName}
          </Typography>
        }
        subtitle={
          <>
            <Tooltip title={`${fullName}, ${owner}`}>
              <Typography
                variant="caption"
                sx={{
                  color: "grey.50",
                  fontSize: ".78rem",
                  lineHeight: 1.1,
                }}
              >
                {fullName}
              </Typography>
            </Tooltip>
            <Typography
              variant="caption"
              sx={{
                color: "grey.300",
                fontSize: ".78rem",
                fontStyle: "italic",
                lineHeight: 1.1,
              }}
            >
              , {owner}
            </Typography>
          </>
        }
        actionIcon={<TitleAvatar title={title} year={year} />}
      />
    </ImageListItem>
  );
}
