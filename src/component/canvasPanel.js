import React, { useRef } from 'react';
import Row from './rowField';

function CanvasPanel({ width, height, color, clearAll, setClearAll }) {
  const componentRef = useRef();
  
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} color={color} clearAll={clearAll} setClearAll={setClearAll}/>)
  }

  return (
    <div id="drawing-panel">
      <div id="pixels" ref={componentRef}>
        {rows}
      </div>
    </div>
  )
}

export default CanvasPanel;