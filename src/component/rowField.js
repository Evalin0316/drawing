import React, { useState } from 'react';

const Row = (props) => {
  const { width, color }  = props;
  const [pixelColor, setPixelColor] = useState('#fff'); // 設置初始顏色

  const applyColor = () => {
    setPixelColor(color);  // 點擊後設置成傳遞的顏色
  }

  const removeColor = () => {
    setPixelColor('#fff');  // 雙擊後設置成白色
  }

  // 渲染方塊
  const renderBlocks = () => {
    const blocks = [];
    for (let i = 0; i < width; i++) {
      blocks.push(
        <div
          key={i} // 每個子元素應有唯一鍵值
          className='block'
          style={{ 'backgroundColor': pixelColor, 'width': '1.5rem', 'height': '1.5rem', cursor: 'pointer' }}
          onClick={applyColor}
          onDoubleClick={removeColor}
        >
        </div>
      );
    }
    return blocks;
  }

  return (
    <div className='row' style={{ 'display':'flex', 'width':'fit-content' }}>
      {renderBlocks()}  {/* 渲染方塊 */}
    </div>
  );
}

export default Row;
