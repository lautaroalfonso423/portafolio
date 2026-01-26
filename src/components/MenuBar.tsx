import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Info } from "../resources/data.ts";

const navItems = [
  { label: "About me", href: "#aboutme" },
  { label: "Experience", href: "#experience" },
  { label: "My Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function MenuBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const btnSx = {
    textTransform: "none",
    fontWeight: 600,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 5,
      right: 5,
      bottom: 6,
      height: 2,
      borderRadius: 2,
      backgroundColor: "currentColor",
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 400ms ease",
      opacity: 0.6,
    },
    "&:hover::after": { transform: "scaleX(1)" },
  } as const;

  const goTo = (href: string) => {
    // Close drawer first so it feels instant on mobile
    setOpen(false);

    // Smooth scroll if available; fallback to normal hash navigation
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Keep URL hash in sync without jumping
      history.replaceState(null, "", href);
    } else {
      // eslint-disable-next-line react-hooks/immutability
      window.location.hash = href;
    }
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(10,14,28,0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <Toolbar sx={{ gap: 1 }}>
        <Avatar sx={{ mr: 1 }} alt={Info.name} src="/my-photo.jpeg" />

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: { xs: "1rem", sm: "1.1rem" },
          }}
        >
          My Portfolio
        </Typography>

        {/* Desktop nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {navItems.map((item) => (
              <Button key={item.href} color="inherit" href={item.href} sx={btnSx}>
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "rgba(10,14,28,0.95)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar alt={Info.name} src="/my-photo.jpeg" />
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontWeight: 800, lineHeight: 1.1 }}>{Info.name}</Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {"Software Engineer"}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.10)" }} />

        <List sx={{ py: 0 }}>
          {navItems.map((item) => (
            <ListItemButton key={item.href} onClick={() => goTo(item.href)}>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ p: 2, mt: "auto" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => goTo("#contact")}
            sx={{ borderRadius: 999, textTransform: "none", fontWeight: 700 }}
          >
            Contact
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
