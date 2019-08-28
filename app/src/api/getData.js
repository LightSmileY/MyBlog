import request from 'axios'
import {serverUrl} from '../utils/env'

/*注册*/
const signup = data => {
  return request({
    url: serverUrl + '/user/signup',
    method: 'post',
    data
  })
}

/*登录*/
const signin = data => {
  return request({
    url: serverUrl + '/user/signin',
    method: 'post',
    data
  })
}

/*给我留言*/
const addMessage = data => {
  return request({
    url: serverUrl + '/message/add',
    method: 'post',
    data
  })
}

/*获取留言列表*/
const getAllMessages = () => {
  return request({
    url: serverUrl + '/message/getAll',
    method: 'get'
  })
}

/*获取时光轴*/
const getTimeAxis = () => {
  return request({
    url: serverUrl + '/timeAxis/getAll',
    method: 'get'
  })
}

/*获取所有文章*/
const getAllArticles = () => {
  return request({
    url: serverUrl + '/article/getAll',
    method: 'get'
  })
}

/*根据title获取一篇文章*/
const getArticleByTitle = data => {
  return request({
    url: serverUrl + '/article/getByTitle',
    method: 'get',
    params: data
  })
}

/*根据类型获取文章*/
const getArticlesByType = data => {
  return request({
    url: serverUrl + '/article/getByType',
    method: 'get',
    params: data
  })
}

/*获取所有type为"技术分享"和"韶华追忆"文章*/
const getArticlesTypeInTS = () => {
  return request({
    url: serverUrl + '/article/getInTS',
    method: 'get'
  })
}

/*查看该文章*/
const viewArticle = data => {
  return request({
    url: serverUrl + '/article/view',
    method: 'post',
    data
  })
}

/*点赞该文章*/
const likeArticle = data => {
  return request({
    url: serverUrl + '/article/like',
    method: 'post',
    data
  })
}

/*评论该文章*/
const commentArticle = data => {
  return request({
    url: serverUrl + '/article/comment',
    method: 'post',
    data
  })
}

/*获取我的资料*/
const getMyProfile = () => {
  return request({
    url: serverUrl + '/aboutMe/getMyProfile',
    method: 'get'
  })
}

export {
  signup,
  signin,
  addMessage,
  getAllMessages,
  getTimeAxis,
  getAllArticles,
  getArticleByTitle,
  getArticlesByType,
  getArticlesTypeInTS,
  viewArticle,
  likeArticle,
  commentArticle,
  getMyProfile
}