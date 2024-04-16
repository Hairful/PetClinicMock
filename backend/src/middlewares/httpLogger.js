/**
 * 文件: /backend/src/middlewares/httpLogger.js
 * 描述: I have no idea how to code this middleware. I need time.
 * 作者: {}
 */

/*
总之这里需要对http进行记录，req倒是好说，丢到最前面就行
问题是怎么记录响应，目前http是在Controller层进行响应的
如果记录的话需要再开一个中间件？
{req}->route->log->auth->controller->log->{res}
                            |
                        service
aziyiyo
 */