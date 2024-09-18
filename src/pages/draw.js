import React, { useState, useCallback } from 'react';
import CanvasPanel from '../component/canvasPanel';
import { HexColorPicker } from "react-colorful";
import '../style/draw.css';

const Draw = () => {
    const [canvasWidth, setCanvasWidth] = useState(16);
    const [canvasHeight, setCanvasHeight] = useState(16);
    const [color, setColor] = useState("#aabbcc");
    const [clearAll, setClearAll] = useState(false);

    const handleClearAll = useCallback(() => {
      setClearAll(prev => !prev);
  }, []);

    return (
    <div className="container">
        {/* <div className="title">一緒に絵を描くよ</div> */}
        <div className="draw-container">
            <div className="canvas-wrapper">
                <CanvasPanel
                    width={canvasWidth}
                    height={canvasHeight}
                    color={color}
                    clearAll={clearAll}
                    setClearAll={setClearAll}
                />
            </div>
            <div className="controls-wrapper">
                <div className="input-group">
                    <label htmlFor="width-input">寬度:</label>
                    <input
                        id="width-input"
                        type='number'
                        className='panel-input'
                        value={canvasWidth}
                        onChange={(e) => setCanvasWidth(Number(e.target.value))}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="height-input">高度:</label>
                    <input
                        id="height-input"
                        type='number'
                        className='panel-input'
                        value={canvasHeight}
                        onChange={(e) => setCanvasHeight(Number(e.target.value))}
                    />
                </div>
                <div className='button-outline' onClick={handleClearAll}>Clear All</div>
                <div className="color-picker-wrapper">
                    <HexColorPicker color={color} onChange={setColor} />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Draw;