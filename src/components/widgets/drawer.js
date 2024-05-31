import React from "react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { MdOutlineHome } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { PiMoneyFill, PiSidebarDuotone } from "react-icons/pi";
import { TbSpeakerphone } from "react-icons/tb";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { LiaNewspaper } from "react-icons/lia";
import { RiEBikeFill } from "react-icons/ri";
import { TbChartDots3 } from "react-icons/tb";
import { MdOutlineSos } from "react-icons/md";
import { BsPersonFillExclamation } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { IconButton, Typography } from "@mui/material";
import { IoPersonCircleOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";

export const DrawerPage = () => {
  let now = "Referrals";
  const DrawerData = [
    { name: "Home", icon: <MdOutlineHome /> },
    { name: "Driver", icon: <BsFillPersonFill /> },
    { name: "Payouts", icon: <PiMoneyFill /> },
    { name: "Marketing", icon: <TbSpeakerphone /> },
    { name: "Referrals", icon: <MdOutlineConnectWithoutContact /> },
    { name: "Accounting", icon: <LiaNewspaper /> },
    { name: "Rider", icon: <RiEBikeFill /> },
    { name: "Rider Requests", icon: <TbChartDots3 /> },
    { name: "SOS", icon: <MdOutlineSos /> },
    { name: "Complaints", icon: <BsPersonFillExclamation /> },
    { name: "Management", icon: <RiUserSettingsFill /> },
  ];
  return (
    <div className="flex">
      <AppBar
        position="fixed"
        sx={{ bgcolor: "#ffffff", boxShadow: 0, paddingLeft: 32 }}>
        <Toolbar>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                marginRight: 2,
              }}>
              <PiSidebarDuotone />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#808080" }}>
              Add Item
            </Typography>
          </Toolbar>
          <div className="flex justify-end w-full items-center">
            <div className="flex h-full items-center rounded-full bg-gray-100 text-gray-400 dark:text-white py-2 mr-2">
              <p className="pl-3 pr-2 text-xl">
                <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
              </p>
              <input
                type="text"
                placeholder="Search..."
                className="block h-full w-full rounded-full bg-gray-100 text-sm font-medium  outline-none placeholder:!text-gray-400 "
              />
            </div>
            <VscBell style={{ color: "#000000", fontSize: 20 }} />
          </div>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer
        sx={{
          width: 264,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 264,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "#000000" }}>
            <IoPersonCircleOutline />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#000000", ml: 1 }}>
            Krishanku
          </Typography>
        </Toolbar>
        <Divider flexItem />

        <List sx={{ mt: 3 }}>
          {DrawerData.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <p
                  className="grid grid-flow-col  gap-4 items-center text-lg"
                  style={{ color: now === text.name ? "#0d99ff" : "#909090" }}>
                  <span style={{ fontSize: 22 }}>{text.icon}</span> {text.name}
                </p>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
