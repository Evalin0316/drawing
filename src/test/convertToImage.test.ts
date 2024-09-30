import convertToImage from '../utils/convertToImage'
import html2canvas from 'html2canvas';

// 模拟html2canvas
jest.mock('html2canvas');

describe('convertToImage', () => {
  let mockElement: HTMLElement;
  let mockCanvas: HTMLCanvasElement;
  let mockLink: HTMLAnchorElement;

  beforeEach(() => {
    // 设置模拟DOM元素
    mockElement = document.createElement('div');
    mockElement.id = 'testElement';
    document.body.appendChild(mockElement);

    // 模拟canvas
    mockCanvas = document.createElement('canvas');
    (html2canvas as jest.Mock).mockResolvedValue(mockCanvas);

    // 模拟链接元素
    mockLink = document.createElement('a');
    jest.spyOn(document, 'createElement').mockReturnValue(mockLink);
    jest.spyOn(mockLink, 'click').mockImplementation(() => {});
  });

  afterEach(() => {
    document.body.removeChild(mockElement);
    jest.restoreAllMocks();
  });

  it('应该成功转换为PNG图像', async () => {
    await convertToImage('testElement', 'png');

    expect(html2canvas).toHaveBeenCalledWith(mockElement);
    expect(mockCanvas.toDataURL).toHaveBeenCalledWith('image/png');
    expect(mockLink.href).toBe('data:image/png;base64,mockedImageData');
    expect(mockLink.download).toBe('component.png');
    expect(mockLink.click).toHaveBeenCalled();
  });

  it('应该成功转换为JPG图像', async () => {
    await convertToImage('testElement', 'jpg');

    expect(html2canvas).toHaveBeenCalledWith(mockElement);
    expect(mockCanvas.toDataURL).toHaveBeenCalledWith('image/jpg');
    expect(mockLink.href).toBe('data:image/png;base64,mockedImageData');
    expect(mockLink.download).toBe('component.jpg');
    expect(mockLink.click).toHaveBeenCalled();
  });
});