import html2pdf from 'html2pdf.js';

export interface PDFProgressCallback {
  (progress: number): void;
}

export const downloadResumePDF = async (
  onProgress?: PDFProgressCallback
): Promise<void> => {
  try {
    // 显示进度提示
    if (onProgress) {
      onProgress(0);
    }

    // 获取要导出的内容
    const element = document.querySelector('.resume-content') || document.body;

    // 创建优化的样式
    const style = document.createElement('style');
    style.textContent = `
      .resume-content {
        font-family: 'Arial', 'Microsoft YaHei', sans-serif;
        color: #333;
        line-height: 1.6;
      }
      .resume-content h1, .resume-content h2, .resume-content h3 {
        color: #2c3e50;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
      }
      .resume-content .section {
        margin-bottom: 2em;
        page-break-inside: avoid;
      }
    `;
    document.head.appendChild(style);

    if (onProgress) {
      onProgress(30);
    }

    const opt = {
      margin: [15, 15, 15, 15],
      filename: 'ZaoSpace-简历.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true,
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };

    if (onProgress) {
      onProgress(50);
    }

    await html2pdf().set(opt).from(element as HTMLElement).save();

    if (onProgress) {
      onProgress(100);
    }

    // 清理样式
    document.head.removeChild(style);
  } catch (error) {
    console.error('PDF 生成失败:', error);
    throw new Error('PDF 生成失败，请稍后重试');
  }
};

