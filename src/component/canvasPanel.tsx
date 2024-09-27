import React, { useRef } from 'react';
import Row from './rowField';
import '../style/canvasPanel.css';
import convertToImage from '../utils/convertToImage';

interface CanvasPanelProps {
  width: number;
  height: number;
  color: string;
  clearAll: boolean;
  setClearAll: (value: boolean) => void;
}

function CanvasPanel({ width, height, color, clearAll, setClearAll }: CanvasPanelProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  
  let rows: Array<JSX.Element> = [];
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} color={color} clearAll={clearAll} setClearAll={setClearAll} />)
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
          <div className='button-export' onClick={() => convertToImage('pixels', 'jpg')}>export JPEG</div>
        </div>
        <div>
          <div className='button-export' onClick={() => convertToImage('pixels', 'png')}>export PNG</div>
        </div>
      </div>
    </>
  )
}

export default CanvasPanel;