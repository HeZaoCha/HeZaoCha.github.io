/**
 * API 工具函数
 * 统一处理 API 请求
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

/**
 * 发送 POST 请求
 */
export async function post<T = any>(
  endpoint: string,
  data: any,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || '请求失败');
    }

    return result;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * 发送 GET 请求
 */
export async function get<T = any>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || '请求失败');
    }

    return result;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

