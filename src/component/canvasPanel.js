import React, { useRef } from 'react';
import Row from './rowField';
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
import '../style/canvasPanel.css';

function CanvasPanel({ width, height, color, clearAll, setClearAll }) {
  const componentRef = useRef();
  
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} color={color} clearAll={clearAll} setClearAll={setClearAll}/>)
  }

  return (
    <>
      <div id='drawing-panel'>
        <div id='pixels' ref={componentRef}>
          {rows}
        </div>
      </div>
      <div className='button-section'>
        <div>
          <div className='button-export' onClick={() => exportComponentAsJPEG(componentRef)}>export JPEG</div>
        </div>
        <div>
          <div className='button-export' onClick={() => exportComponentAsPNG(componentRef)}>export PNG</div>
        </div>
      </div>
    </>
  )
}

export default CanvasPanel;