import html2canvas from 'html2canvas';

const convertToImage = async (id: string, type: string): Promise<void> => {
  const element = document.getElementById(id);
  if (!element) {
    return Promise.reject(new Error('can not find element'));
  }

  const children = element.getElementsByTagName('*');
  for (let i = 0; i < children.length; i++) {
    (children[i] as HTMLElement).style.border = 'transparent';
  }

  try {
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL(`image/${type}`);
    const link = document.createElement('a');
    link.href = imgData;
    switch (type) {
      case 'jpg':
        link.download = 'component.jpg';
        break;
      case 'png':
        link.download = 'component.png';
        break;
      default:
        throw new Error('invalid type');
    }
    link.click();
  } catch (error) {
    console.error(error);
  } finally {
    // restore border
    for (let i = 0; i < children.length; i++) {
      (children[i] as HTMLElement).style.border = '0.5px solid #ccc';
    }
  }
}

export default convertToImage;
