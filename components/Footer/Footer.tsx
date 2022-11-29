import React, { useState } from "react";
import links from "../../lib/links";

import { Float, Hamburger, MyFloat, List, ListItem } from "./style";
import Link from "next/link";

export default function Footer() {
  const [clicked, setIsClicked] = useState(false);
  const toggleMenu = () => {
    setIsClicked((prevClick) => !prevClick);
  };
  return (
    <>
      <Float as={Float} onClick={toggleMenu} clicked={clicked} id="menu-share">
        <MyFloat>
          <Hamburger as={Hamburger} clicked={clicked}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </MyFloat>
      </Float>
      {clicked ? (
        <List as={List}>
          {links.map((item, index) => {
            return (
              <ListItem as={ListItem} clicked={clicked} key={index}>
                <Link href={item.path}>{item.text}</Link>
              </ListItem>
            );
          })}
        </List>
      ) : null}
    </>
  );
}
