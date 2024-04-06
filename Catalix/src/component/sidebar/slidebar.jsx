import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { BiBarChartSquare } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { IoLayersOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
const Sidebar = ({ children }) => {
  const routes = [
    {
      name: "Home",
      icon: <CiHome />,
      path: "/",
    },
    { name: "Activities", icon: <MdOutlineTimer />, path: "/Activities" },
    { name: "Analitics", icon: <BiBarChartSquare />, path: "/Analitics" },
    {
      name: "Transformation",
      icon: <IoRocketOutline />,
      path: "/Transformation",
    },
    { name: "Library", icon: <IoLayersOutline />, path: "/Library" },
  ];
  return (
    <>
      <div className="main-container">
        <motion.div
          className="sidebar"
          animate={{
            width: "285.33px",
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: " center",
            justifyContent: "space-around",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: " center",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                color: "white",
                display: "flex",
                alignContent: "center",
                alignItems: "flex-start",
                alignItems: " center",
                justifyContent: "center",

                fontSize: "42.67px",
              }}
            >
              <BsBoxSeam />
              Catalix
            </div>
            <section
              className="routes"
              style={{
                display: "grid",
                justifyContent: "center",
                width: "236.44px",
                height: "350.22px",
                flexGap: "9.78px",
                alignItems: "flex-start",

                alignItems: "center",
              }}
            >
              {routes.map((route) => {
                return (
                  <Link to={route.path} style={{ width: "100%" }}>
                    <Button
                      startIcon={route.icon}
                      style={{
                        color: "white",
                      }}
                    >
                      {route.name}
                    </Button>
                  </Link>
                );
              })}
            </section>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Link to={"/setting"} style={{ display: "flex", width: "100%" }}>
                <Button
                  startIcon={<IoSettingsOutline />}
                  style={{
                    color: "white",
                    width: "100%",
                  }}
                >
                  Setting
                </Button>
              </Link>

              <Link to={"/logout"} style={{ display: "flex", width: "100%" }}>
                <Button
                  startIcon={<TbLogout />}
                  style={{
                    color: "white",
                    width: "100%",
                  }}
                >
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};
export default Sidebar;
