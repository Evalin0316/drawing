import React, { useRef } from 'react';
import Row from './rowField';

// import '../styles/drawingPanel.scss';

function CanvasPanel({ width, height, color }) {
  const componentRef = useRef();
  
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} color={color} />)
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