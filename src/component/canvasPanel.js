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
      {/* <button 
        className='button-outline'
        onClick={() => exportComponentAsPNG(componentRef)}
      > Export as PNG
      </button>
      <button 
        className='button-outline'
        onClick={() => exportComponentAsJPEG(componentRef)}
      > Export as JPG
      </button> */}
    </div>
  )
}

export default CanvasPanel;