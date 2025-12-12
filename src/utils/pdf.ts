import html2pdf from 'html2pdf.js';

export const downloadResumePDF = async () => {
  try {
    // 获取要导出的内容
    const element = document.querySelector('.resume-content') || document.body;
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'ZaoSpace-简历.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      },
    };

    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('PDF 生成失败:', error);
    alert('PDF 生成失败，请稍后重试');
  }
};

