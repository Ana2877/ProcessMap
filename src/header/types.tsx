import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface AppBarProps extends MuiAppBarProps {
  isDrawerOpen?: boolean;
}
