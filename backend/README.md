# PCM-BACKEND

此文件主要介绍后端的以下信息

- 部署
- 规范
- 架构

## 部署

### 服务器启动

```bash
cd backend
npm install
node src/server.js
```

### 环境变量设置

==请不要使用缺省值，资源已被释放，无法连接==

```js
// database env
process.env.DB_HOST
process.env.DB_TYPE
process.env.DB_NAME
process.env.DB_USER
process.env.DB_PASSWORD
process.env.REDIS_URL

//encrypt env
process.env.CRYPTO_MENT
process.env.CRYPTO_IV

// OSS env
process.env.OSS_REGION,
process.env.OSS_ACCESS_KEY_ID,
process.env.OSS_ACCESS_KEY_SECRET,
process.env.OSS_BUCKET

// JWT env
process.env.TOKEN_KEY
```

### 云部署

以阿里云为例

#### 配置git环境并设置ssh

```shell
yum install git -y
git config --global user.name "your name"
git config --global user.email "your email"
ssh-keygen -t rsa -C "ssh-keygen"
git clone "ssh URL"
```

#### 部署Node.js环境

```shell
echo ". ~/.nvm/nvm.sh" >> /etc/profile
source /etc/profile
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
nvm list-remote
nvm install v20.12.0
nvm use v20.12.0
```

#### 部署redis

```shell
sudo systemctl stop firewalld
tar -zxvf redis-6.2.4.tar.gz
mv redis-6.2.4 /usr/local/
cd /usr/local/redis-6.2.4/
make  ./bin/redis-server ./redis.conf
chmod 777 bin/redis-server redis.conf ./bin/redis-cli
```

## 规范

### 命名

- **文件夹名** 小写 若分段请用- 例如compiler-sfc
- **.js文件名** 小驼峰
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
 * 注意: (可选，一些错误处理机制的说明)
 * TODO: 可能有的对于函数需要修改/补充的说明
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

## 架构

根目录包含项目的配置文件，如 `package.json`、`node_modules` 等，以及以下内容

### src 目录

- **routes**：定义 API 的路由及其对应的处理函数。

>**转发路由** 将req分配到不同的controller
**导入中间件** 导入中间件对req进行验证或者一些预处理

- **controllers**：处理请求的逻辑，将请求转发给服务层处理。

>**接收请求参数** 从HTTP请求中获取需要的参数，例如req.body中的userName和password。
**调用服务层方法** 使用获取到的参数调用相应的服务层方法来执行业务逻辑。例如调用了registerUser和loginUser两个服务层方法
**处理服务层返回的结果** 获取服务层方法的返回结果，并根据结果决定如何响应客户端的请求。通常情况下，会将结果以JSON格式发送给客户端。例如通过res.status(200).json(result)来发送结果给客户端。
**发送HTTP响应** 在处理完请求后，发送HTTP响应给客户端。通常情况下，会设置响应的状态码（如200表示成功）、响应头（如Content-Type）、以及响应体（如JSON格式的数据）

- **services**：封装业务逻辑，处理具体的业务需求。

>**与数据库交互**：Service层负责与数据库进行交互，执行数据库操作如查询、插入、更新、删除等。例如通过调用User模型的方法来与数据库进行交互，执行用户的注册和登录操作。
**执行业务逻辑**：Service层实现具体的业务逻辑，如用户注册、用户登录等。例如实现了注册用户和登录用户的功能，并且处理了加密和解密密码的逻辑。
**数据处理和转换**：Service层负责对数据进行处理和转换，确保数据的格式正确并且符合业务需求。例如对密码进行了加密和解密处理，并且将数据库返回的结果转换为适合发送给Controller的格式。
**异常处理**：Service层应该对可能发生的异常进行处理，并且返回适当的错误信息给Controller。例如使用try-catch语句来捕获可能发生的异常，并且返回相应的错误信息。

- **middlewares**：存放自定义中间件，例如认证中间件、错误处理中间件、日志中间件等。
- **models**：定义数据模型，操作数据库的方法。
- **utils**：存放工具函数或工具类，例如加盐哈希、日志工具等。
- **config**：存放配置文件，包括数据库配置、加密配置、身份认证配置等。
- **app.js**：Express 应用的入口文件，定义中间件、路由等。
- **server.js**：服务器启动文件，创建 Express 实例并监听端口。
