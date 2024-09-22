import React, { useState, useCallback } from 'react';
import CanvasPanel from '../component/canvasPanel';
import { HexColorPicker } from "react-colorful";
import '../style/draw.css';

const Draw = () => {
    const [canvasWidth, setCanvasWidth] = useState(16);
    const [canvasHeight, setCanvasHeight] = useState(16);
    const [color, setColor] = useState("#aabbcc");
    const [clearAll, setClearAll] = useState(false);
    const [widthError, setWidthError] = useState(false);
    const [heightError, setHeightError] = useState(false);

    const handleClearAll = useCallback(() => {
      setClearAll(prev => !prev);
  }, []);
  

  const handleChangeWidth = (value: number) => {
    if (value <= 50) {
        setCanvasWidth(value);
        setWidthError(false);
    } else {
        setWidthError(true);
    }
}

const handleChangeHeight = (value: number) => {
    if (value <= 50) {
        setCanvasHeight(value);
        setHeightError(false);
    } else {
        setHeightError(true);
    }
}


    return (
    <div className='container'>
        <div className='draw-container'>
          <div className='canvas-wrapper'>
          <div className='controls-wrapper-title'>Draw Panel</div>
              <CanvasPanel
                width={canvasWidth}
                height={canvasHeight}
                color={color}
                clearAll={clearAll}
                setClearAll={setClearAll}
              />
          </div>
          <div className='controls-wrapper'>
            <div className='controls-wrapper-title'>Setting</div>
            <div className='input-group-wrapper'>
              <div className='input-group'>
                <label htmlFor='width-input' className='text-input'>寬度:</label>
                <input
                  id='width-input'
                  type='text'
                  className='panel-input'
                  value={canvasWidth}
                  onChange={(e) => handleChangeWidth(Number(e.target.value))}
                />
              </div>
              {widthError && <span className="error-text">寬度不能超過50</span>}
            </div>
            <div className='input-group-wrapper'>
              <div className='input-group'>
                <label htmlFor='height-input' className='text-input'>高度:</label>
                <input
                  id='height-input'
                  type='text'
                  className='panel-input'
                  value={canvasHeight}
                  onChange={(e) => handleChangeHeight(Number(e.target.value))}
                />
              </div>
              {heightError && <span className="error-text">高度不能超過50</span>}
            </div>
            <div className='button-outline' onClick={handleClearAll}>Clear All</div>
            <div className='color-picker-wrapper'>
              <HexColorPicker color={color} onChange={setColor} />
            </div>
          </div>
        </div>
    </div>
    );
}

export default Draw;