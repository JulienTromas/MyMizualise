import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
        <div>
        <NavLink to="/Bottles">
            <button>
            My bottles
            </button>
        </NavLink>
        <NavLink to="/Co2">
            <button>
            My CO2
            </button>
        </NavLink>
          </div>
    </>
  );
}


