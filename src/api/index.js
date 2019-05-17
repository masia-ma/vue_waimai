import ajax from './ajax'

const BASE_URL = ''

// 1.注册
export const reqRegister = (formData) => ajax('/users/register', formData, 'post')
// 2.登录
export const reqLogin = (formData) => ajax('/users/login', formData, 'post')