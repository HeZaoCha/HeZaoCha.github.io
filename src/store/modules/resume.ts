import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { ResumeData } from '@/types/resume';
import { resumeData as defaultResumeData } from '@/constants/resume-data';
import { getStorage, setStorage } from '@/utils/storage';

const RESUME_DATA_KEY = 'resume_data';

export const useResumeStore = defineStore('resume', () => {
  const resumeData = ref<ResumeData>(
    (getStorage(RESUME_DATA_KEY) as ResumeData) || defaultResumeData
  );

  // 监听数据变化，自动保存到 localStorage
  watch(
    resumeData,
    (newData) => {
      setStorage(RESUME_DATA_KEY, newData);
    },
    { deep: true }
  );

  // 更新个人信息
  const updatePersonalInfo = (info: Partial<ResumeData['personalInfo']>) => {
    resumeData.value.personalInfo = { ...resumeData.value.personalInfo, ...info };
  };

  // 添加教育经历
  const addEducation = (education: ResumeData['education'][0]) => {
    resumeData.value.education.push(education);
  };

  // 更新教育经历
  const updateEducation = (index: number, education: Partial<ResumeData['education'][0]>) => {
    resumeData.value.education[index] = {
      ...resumeData.value.education[index],
      ...education,
    };
  };

  // 删除教育经历
  const removeEducation = (index: number) => {
    resumeData.value.education.splice(index, 1);
  };

  // 添加工作经历
  const addWorkExperience = (experience: ResumeData['workExperience'][0]) => {
    resumeData.value.workExperience.push(experience);
  };

  // 更新工作经历
  const updateWorkExperience = (
    index: number,
    experience: Partial<ResumeData['workExperience'][0]>
  ) => {
    resumeData.value.workExperience[index] = {
      ...resumeData.value.workExperience[index],
      ...experience,
    };
  };

  // 删除工作经历
  const removeWorkExperience = (index: number) => {
    resumeData.value.workExperience.splice(index, 1);
  };

  // 添加项目
  const addProject = (project: ResumeData['projects'][0]) => {
    resumeData.value.projects.push(project);
  };

  // 更新项目
  const updateProject = (index: number, project: Partial<ResumeData['projects'][0]>) => {
    resumeData.value.projects[index] = { ...resumeData.value.projects[index], ...project };
  };

  // 删除项目
  const removeProject = (index: number) => {
    resumeData.value.projects.splice(index, 1);
  };

  // 添加技能
  const addSkill = (category: string, skill: ResumeData['skills'][0]['items'][0]) => {
    const categoryIndex = resumeData.value.skills.findIndex((s) => s.category === category);
    if (categoryIndex >= 0) {
      resumeData.value.skills[categoryIndex].items.push(skill);
    } else {
      resumeData.value.skills.push({ category, items: [skill] });
    }
  };

  // 重置为默认数据
  const resetToDefault = () => {
    resumeData.value = defaultResumeData;
    setStorage(RESUME_DATA_KEY, defaultResumeData);
  };

  // 导出数据
  const exportData = (): string => {
    return JSON.stringify(resumeData.value, null, 2);
  };

  // 导入数据
  const importData = (data: ResumeData) => {
    resumeData.value = data;
    setStorage(RESUME_DATA_KEY, data);
  };

  return {
    resumeData,
    updatePersonalInfo,
    addEducation,
    updateEducation,
    removeEducation,
    addWorkExperience,
    updateWorkExperience,
    removeWorkExperience,
    addProject,
    updateProject,
    removeProject,
    addSkill,
    resetToDefault,
    exportData,
    importData,
  };
});

