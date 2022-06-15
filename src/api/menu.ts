/**
 * 服务器获取菜单
 */
import { Menu } from './type/menu'
export const menuList:Menu[] = [{
  id: 1,
  name: '设置',
  icon: 'setting',
  path: '/console',
  children: [{
    id: 11,
    name: '学期',
    icon: 'calendar',
    path: '/term',
    children: null
  },
  {
    id: 12,
    name: '班级',
    icon: 'class',
    path: '/class',
    children: null
  }, {
    id: 13,
    name: '课程',
    icon: 'course',
    path: '/course',
    children: null
  }, {
    id: 14,
    name: '作息时间表',
    icon: 'schedule',
    path: '/schedule',
    children: null
  }, {
    id: 15,
    name: '任课教师',
    icon: 'teacher',
    path: '/teacher',
    children: null
  }]
}]
