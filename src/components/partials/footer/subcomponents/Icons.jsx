import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import "./icons.css";

const iconMap = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};

export const Icons = ({ title, url }) => {
  const IconComponent = iconMap[title];

  return (
    <>
      {IconComponent && (
        <IconButton
          component="a"
          href={url}
          target="_blank"
          color="inherit"
          className="container-icons"
        >
          <IconComponent
            className={`${title}`}
            sx={{
              fontSize: 35,
              color: "white",
            }}
          />
        </IconButton>
      )}
    </>
  );
};
