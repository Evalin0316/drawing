import React, { useState, useEffect } from 'react';

interface RowProps {
  width: number;
  color: string;
  clearAll: boolean;
  setClearAll: (value: boolean) => void;
}

const Row = ({ width, color, clearAll, setClearAll }: RowProps) => {
  const [pixelColors, setPixelColors] = useState<string[]>(Array(width).fill('#fff'));

  const handleClick = (index: number) => {
    const newColors = [...pixelColors];
    newColors[index] = color;
    setPixelColors(newColors);
  }

  const handleDoubleClick = (index: number) => {
    const newColors = [...pixelColors];
    newColors[index] = '#fff';
    setPixelColors(newColors);
  }

  useEffect(() => {
    if (clearAll) {
      setPixelColors(Array(width).fill('#fff'));
      setClearAll(false);
    }
  }, [clearAll, setClearAll, width]);

  const blockStyle = {
    width: '1.5rem',
    height: '1.5rem',
    cursor: 'pointer',
    border: '0.5px solid #ccc'
  };

  return (
    <div className='row' style={{ display: 'flex', width: 'fit-content' }}>
      {Array.from({ length: width }, (v, index) => (
        <div
          key={index}
          className='block'
          style={{ ...blockStyle, backgroundColor: pixelColors[index] }}
          onClick={() => handleClick(index)}
          onDoubleClick={() => handleDoubleClick(index)}
        />
      ))}
    </div>
  );
}

export default Row;