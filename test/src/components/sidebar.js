import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import React from "react";

function sidebar({}) {
  return (
    <div>
      <Sidebar>
        <Menu>
          <SubMenu label="Application">
            <MenuItem> Local Body Details </MenuItem>{" "}
            <MenuItem>Permit And Occupancy Details </MenuItem>
          </SubMenu>
          <MenuItem> Required Documents </MenuItem>
          <MenuItem> Guidelines </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default sidebar;
