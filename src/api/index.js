import ajax from './ajax'

// 1、获取E宠主页广告列表](##获取E宠主页广告列表)
export const reqHome = () => ajax('/api/index')

// 2、获取轮播图广告和每日疯抢](#获取轮播图广告和每日疯抢)
export const reqCarousel = () => ajax('/api/carousel')
