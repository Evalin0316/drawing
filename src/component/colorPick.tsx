import React,{ useState } from 'react';
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [color, setColor] = useState<string>("#aabbcc");
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker ;