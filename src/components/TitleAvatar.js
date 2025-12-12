import { Avatar, Box, Tooltip, Typography } from "@mui/material";

export function TitleAvatar(props) {
  const { title, year } = props;

  const { id, name, color, border } = title ?? {};

  return (
    <Tooltip title={name}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 60,
          background:
            "linear-gradient(to right, transparent, transparent 15px, #002060 15px, #002060 25px, #ffffff 25px, #ffffff 35px, #820000 35px, #820000 45px, transparent 45px)",
        }}
      >
        <Avatar
          aria-label={id}
          sx={{
            backgroundColor: color,
            border: `2px solid ${title.border}`,
            color: "common.white",
            boxShadow: 6,
            height: 40,
            width: 60,
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
          }}
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
      </Box>
    </Tooltip>
  );
}
