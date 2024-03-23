# PCM-BACKEND

此文件主要介绍后端采用的代码结构组织，以及相关规范
==如果问GPT，先把这个文档发给它，让它确定项目结构后再问==

## 规范

### 命名

- **文件夹名，.js文件名** 小写 若分段请用- 例如compiler-sfc
- **Markdown文件名** 全大写
- **类名，枚举类型，组件** 大驼峰
- **函数名，方法** 小驼峰

>如果函数是描述某个操作/动作，则应该使用动词作为开头，例如 getUserInfo(), calculateTotal().
如果函数是获取某个属性或状态，则使用 get 开头，例如 getName(), getAge().
如果函数是设置某个属性或状态，则使用 set 开头，例如 setName(), setAge()

- **变量名** 小驼峰
  
>布尔值一般以is，are，has等表示判断意义的单词作为其前缀，例如areEqual hasEncryption isVisible

- **常量名** 全大写，下划线连接；例如MAX_VALUE
- **私有变量/私有函数/私有方法** 以下划线作为前缀，其余与之前相同，例如_getUserInfo()

### 注释

==写完代码，请在文件开头补充代码简介，在函数开头补充代码的参数，返回值，简介，注意等信息，格式如下==

```js
//函数注释格式
/** 
 * getUser(函数名) - 根据ID检索用户。(简介)
 * @param {string} 要检索的用户的ID。
 * @returns {Object} 从数据库检索到的用户对象。
 * 注意 (可选，一些错误处理机制的说明)
 */

//文件注释格式
/**
 * 文件: userRoutes.js
 * 描述: 定义与用户管理相关的路由
 * 作者: YYZ
 */
```

### commit

commit具有以下格式，一般使用vscode git时只需填写第一行Commit Message，可参考历史提交记录中的格式

```txt
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

下面列出Commit Message的type标识

- ``feat`` – 新功能的变化
- ``fix`` – 错误的修复
- ``chore`` – 与修复或功能无关、不修改src或测试文件的更改（例如更新依赖关系）
- ``refactor`` – 既不修复错误也不增加功能的重构代码
- ``docs`` – 更新文件，如 README 或其他标记文件
- ``style`` – 不影响代码含义的更改，可能与代码格式有关，如空白、分号缺失等。
- ``test`` – 包括新的测试或纠正以前的测试
- ``perf`` – 性能改进
- ``ci`` – 持续集成相关
- ``build`` – 影响构建系统或外部依赖关系的更改
- ``revert`` – 还原之前的提交

## 文件结构

根目录包含项目的配置文件，如 `package.json`、`node_modules` 等，以及以下内容

### src 目录

- **config**：存放配置文件，包括数据库配置、日志配置、身份认证配置等。
- **controllers**：处理请求的逻辑，将请求转发给服务层处理。
- **middlewares**：存放自定义中间件，例如认证中间件、错误处理中间件、日志中间件等。
- **models**：定义数据模型，操作数据库的方法。
- **routes**：定义 API 的路由及其对应的处理函数。
- **services**：封装业务逻辑，处理具体的业务需求。
- **utils**：存放工具函数或工具类，例如加密解密函数、日期处理函数等。
- **app.js**：Express 应用的入口文件，定义中间件、路由等。
- **database.js**：数据库连接文件，定义数据库连接池、初始化等。
- **server.js**：服务器启动文件，创建 Express 实例并监听端口。

### test 目录

- **unit**：存放单元测试相关的代码。
- **integration**：存放集成测试相关的代码。
