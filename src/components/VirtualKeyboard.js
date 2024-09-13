import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const VirtualKeyboard = ({ onKeyPress }) => {
  return (
    <Keyboard
      onKeyPress={onKeyPress}
      theme={"hg-theme-default hg-layout-default"}
      layout={{
        default: [
          "1 2 3 4 5 6 7 8 9 0",
          "q w e r t y u i o p",
          "a s d f g h j k l",
          "z x c v b n m {bksp}",
        ],
      }}
    />
  );
};