import {
  ImageList,
  ImageListItem,
  ListSubheader,
  Typography,
} from "@mui/material";

import { Box } from "@mui/material";
import { DogTile } from "./DogTile";
import { groupBy } from "lodash";

export function DogTileList(props) {
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: "background.paper",
      }}
    >
      <ImageList sx={{ justifyContent: "center" }} maxWidth={true} cols={3}>
        {sorted.map(([key, value], i) => (
          <>
            <ImageListItem
              key={`group-${key}`}
              sx={{
                width: "100%",
                margin: 0,
                marginTop: 2,
                marginBottom: 0.5,
              }}
              cols={3}
            >
              <ListSubheader
                component="div"
                sx={{
                  color: "#000",
                  backgroundColor: "grey.100",
                  margin: 0.5,
                  boxShadow: 4,
                }}
              >
                <Typography variant="h3">
                  {getGroupLabel(key, titles)}
                </Typography>
              </ListSubheader>
            </ImageListItem>
            {value.map((item, j) => (
              <DogTile key={`dog-${i}-${j}`} data={item} />
            ))}
          </>
        ))}
      </ImageList>
    </Box>
  );
}
