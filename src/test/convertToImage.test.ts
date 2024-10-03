import convertToImage from '../utils/convertToImage';

describe('convertToImage', () => {
  beforeEach(() => {
    // 設置測試環境
    document.body.innerHTML = '<div id="testElement"><p>Test</p></div>';

    window.getComputedStyle = jest.fn().mockReturnValue({
      // 返回需要的樣式屬性
      getPropertyValue: jest.fn().mockReturnValue(''),
    });
  });

  // 測試找不到元素
  it('should reject if element is not found', async () => {
    await expect(convertToImage('nonExistentId', 'png')).rejects.toThrow('can not find element');
  });

  // it('should throw an error for invalid type', async () => {
  //   await expect(convertToImage('testElement', 'gif')).rejects.toThrow('invalid type');
  // });

  // 測試創建下載連結
  it('should create a download link for jpg', async () => {
    const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'style') {
        return { click: jest.fn(), setAttribute: jest.fn() } as any;
      }
      return document.createElement(tagName);
    });

    await convertToImage('testElement', 'jpg');
    expect(createElementSpy).toHaveBeenCalledWith('style');
    createElementSpy.mockRestore();
  });

  it('should create a download link for png', async () => {
    const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'style') {
        return { click: jest.fn(), setAttribute: jest.fn() } as any;
      }
      return document.createElement(tagName);
    });

    await convertToImage('testElement', 'png');
    expect(createElementSpy).toHaveBeenCalledWith('style');
    createElementSpy.mockRestore();
  });
});