import React,{ useState } from 'react';
// import ColorPicker from '../component/colorPick';
import CanvasPanel from '../component/canvasPanel';
import { HexColorPicker } from "react-colorful";

const Draw = () => {
    const [canvasWidth, setCanvasWidth] = useState(160);
    const [canvasHeight, setCanvasHeight] = useState(160);
    // const [selectedColor, setSelectedColor] = useState('#aabbcc');
    const [color, setColor] = useState("#aabbcc");

    return(
        <>
            <div style={{display:'flex', flexDirection:'column', width:'500px', alignItems:'flex-start'}}>
                <div>
                    <input
                    type='number' 
                    className='panelInput' 
                    defaultValue={canvasWidth}
                    onChange={(e)=>setCanvasWidth(e.target.value)}
                    />
                </div>
                <div>
                    <input
                      type='number' 
                      className='panelInput' 
                      defaultValue={canvasHeight}
                      onChange={(e)=>setCanvasHeight(e.target.value)}
                    />
                </div>
                <HexColorPicker color={color} onChange={setColor} />
            </div>
            <div>
              <CanvasPanel
                width={canvasWidth}
                height={canvasHeight}
                color={color}
              />
            </div>
        </>
    )

}

export default Draw ;