import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "300px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
        "&:hover img ": {
          transform: "scale(1.1)",
          transition: "all 0.5s ease",
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{
            width: 358,
            height: 180,
          }}
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        />

        <CardContent
          sx={{
            backgroundColor: "#09094e",
            height: "80px",
          }}
        >
          <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0, 60) ||
                demoVideoTitle?.title.slice(0, 60)}
            </Typography>
          </Link>

          <Link
            to={
              snippet?.channelId
                ? `video/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle.slice(0, 60) ||
                demoChannelTitle?.title.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
