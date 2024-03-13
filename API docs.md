# 1. 身份认证

## `GET /register`

新用户注册

### 请求参数

| 参数名称 | 类型   | 是否必须 | 实例          | 备注           |
| -------- | ------ | -------- | ------------- | -------------- |
| userName | String | 是       | “Allen Yung”  | 用户名         |
| password | String | 是       | “foejwoghwoi” | 用户设定的密码 |

### 返回参数

```json
Data:[
    {
        "status": true	// 状态，Boolean，true代表成功、false代表失败
    }
]
```

## `GET /login`

用户登录

### 请求参数

| 参数名称 | 类型   | 是否必须 | 实例          | 备注   |
| -------- | ------ | -------- | ------------- | ------ |
| userName | String | 是       | “Allen Yung”  | 用户名 |
| password | String | 是       | “foejwoghwoi” | 密码   |

### 返回参数

```json
Data:[
    {
        "status": 0	// 状态，Integer，0代表成功、1代表密码错误、2代表没有找到该用户
    }
]
```

# 2. 病例学习

## `GET /casestudy/list`

返回能够学习的病例类型

### 请求参数

| 参数名称 | 类型 | 是否必须 | 实例 | 备注 |
| -------- | ---- | -------- | ---- | ---- |
|          |      |          |      |      |

### 返回参数

```json
Data:[
    {
        "type": "寄生虫病",	// 大类，String
        "diseases": ["蛔虫病", "钩虫病"]	// 具体疾病类型，List<String>
    }, 
    {
        "type": "内科病例",	// 大类，String
        "diseases": ["口炎", "肠炎"]	// 具体疾病类型，List<String>
    }
]
```

## `GET /casestudy/casedetail`

返回能够学习的病例类型

### 请求参数

| 参数名称 | 类型   | 是否必须 | 实例       | 备注         |
| -------- | ------ | -------- | ---------- | ------------ |
| disease  | String | 是       | “膀胱结石” | 具体疾病类型 |

### 返回参数

```json
Data:[
    {
        "summary": "狗狗，腹痛多日……",	// 病例的基本情况，String
        "summaryPictures": ["url/to/pic0"],	// 能表现典型临床症状的照片，String
        "summaryVideos": ["url/to/vid0"],	// 能表现典型临床症状的视频，String
        "examine": "经B超检查，发现……",	// 检查项目及结果，String
        "examinePictures": ["url/to/pic1", "url/to/pic2"],	// 检查结果单，String
        "examineVideos": ["url/to/vid1"],	// 检查结果视频，String
        "diagnose": "膀胱结石",	// 临床诊断结果，String
        "diagnosePictures": ["url/to/pic1", "url/to/pic2"],	// 临床诊断结果，String
        "diagnoseVideos": ["url/to/vid1"],	// 临床诊断结果视频，String
        "treatment": "肾上腺素100000mg",	// 治疗方案，String
        "treatmentPictures": ["url/to/pic1", "url/to/pic2"],	// 治疗图片，String
        "treatmentVideos": ["url/to/vid0"]	// 手术视频，String
    }
]
```

# 3. 角色扮演

## `GET /roleplaying/list`

选择该角色工作职责

### 请求参数

| 参数名称 | 类型    | 是否必须 | 实例 | 备注                              |
| -------- | ------- | -------- | ---- | --------------------------------- |
| role     | Integer | 是       | 1    | 0代表前台、1代表医助、2代表兽医师 |

### 返回参数

```json
Data:[
    {
        "jobs": ["注射", "术前准备"]	// 工作内容选择，List<String>
    }
]
```

## `GET /roleplaying/detail`

具体工作流程

### 请求参数

| 参数名称 | 类型    | 是否必须 | 实例   | 备注                              |
| -------- | ------- | -------- | ------ | --------------------------------- |
| role     | Integer | 是       | 1      | 0代表前台、1代表医助、2代表兽医师 |
| job      | String  | 是       | “注射” | 工作内容选择                      |

### 返回参数

```json
Data:[
    {
        "title": "静脉注射",	// 名称，String
        "detail": "1. 备皮，..."	// 具体信息，String
    },
    {
        "title": "皮下注射",	// 名称，String
        "detail": "1. 备皮，..."	// 具体信息，String
    }
]
```

# 4. 在线测试

## `GET /quiz/list`

所有的考试

### 请求参数

| 参数名称 | 类型 | 是否必须 | 实例 | 备注 |
| -------- | ---- | -------- | ---- | ---- |
|          |      |          |      |      |

### 返回参数

```json
Data:[
    {
        "quizName": "测试1",		// 测试名称，String
        "totalCredits": 100,	// 总分，Integer
        "lastTry": 30,		// 上次得分，Integer
        "lastTryTime": "2024年11月20日 11:59PM",	// 上次时间，String
    }
]
```

## `GET /quiz/detail`

某个考试

### 请求参数

| 参数名称 | 类型   | 是否必须 | 实例    | 备注     |
| -------- | ------ | -------- | ------- | -------- |
| quizName | String | 是       | “测试1” | 试卷名称 |

### 返回参数

```json
Data:[
    {
        "quizName": "测试1",	// 测试名称，String
        "totalCredits": 100		// 总分，Integer
    },
    {
        "probNumber": 1,	// 题号，Integer
        "probText": "。。。",	// 题目，String
        "probImg": "url",	// 图片路径，String
        "probAns": 1,	// 答案，Integer，0123代表ABCD
    },
    {
        "probNumber": 2,	// 题号，Integer
        "probText": "。。。",	// 题目，String
        "probImg": "url",	// 图片路径，String
        "probAns": 1,	// 答案，Integer，0123代表ABCD
    },
]
```

## `POST /quiz/result`

考试结果录入

### 请求参数

| 参数名称 | 类型                        | 是否必须 | 实例    | 备注             |
| -------- | --------------------------- | -------- | ------- | ---------------- |
| quizName | String                      | 是       | “测试1” | 试卷名称         |
| credit   | Integer                     | 是       | 10      | 成绩             |
| wrongAns | Key<Integer>,Value<Integer> | 是       | 1:2     | 做错的题目及选项 |

### 返回参数

```json
Data:[
    
]
```

# 5. 后台管理

## `GET /admin/users`

获取所有用户

### 请求参数

| 参数名称 | 类型 | 是否必须 | 实例 | 备注 |
| -------- | ---- | -------- | ---- | ---- |
|          |      |          |      |      |

### 返回参数

```json
Data:[
    {
        "userName": "A", 	// 用户名，String
        "password":	"g",		// 密码，String
        "isAdmin": false	// 是否为管理员，Boolean
    },
    {
        "userName": "N", 	// 用户名，String
        "password":	"a",		// 密码，String
        "isAdmin": true	// 是否为管理员，Boolean
    }
]
```

## `POST /admin/users`

添加用户

### 发送参数

| 参数名称 | 类型    | 是否必须 | 实例          | 备注           |
| -------- | ------- | -------- | ------------- | -------------- |
| userName | String  | 是       | “Allen Yung”  | 用户名         |
| password | String  | 是       | “foejwoghwoi” | 用户设定的密码 |
| isAdmin  | Boolean | 是       | True          | 是否为管理员   |

### 返回参数

```json
Data:[
    
]
```

## `PUT /admin/users`

修改用户信息

### 发送参数

| 参数名称 | 类型    | 是否必须 | 实例          | 备注           |
| -------- | ------- | -------- | ------------- | -------------- |
| userName | String  | 是       | “Allen Yung”  | 用户名         |
| password | String  | 是       | “foejwoghwoi” | 用户设定的密码 |
| isAdmin  | Boolean | 是       | True          | 是否为管理员   |

### 返回参数

```json
Data:[
    
]
```

## `DELETE /admin/users`

删除用户信息

### 发送参数

| 参数名称 | 类型   | 是否必须 | 实例         | 备注   |
| -------- | ------ | -------- | ------------ | ------ |
| userName | String | 是       | “Allen Yung” | 用户名 |

### 返回参数

```json
Data:[
    
]
```

## POST /admin/casestudy`

添加病例

### 发送参数

| 参数名称          | 类型         | 是否必须 | 实例            | 备注                       |
| ----------------- | ------------ | -------- | --------------- | -------------------------- |
| type              | String       | 是       | “寄生虫病”      | 大类，可能已经存在         |
| disease           | String       | 是       | “膀胱结石”      | 具体疾病类型，可能已经存在 |
| summary           | String       | 是       | “Xxx”           | 病例的基本情况             |
| summaryPictures   | List<String> | 否       | ["url/to/pic0"] | 能表现典型临床症状的照片   |
| summaryVideos     | List<String> | 否       | ["url/to/vid0"] | 能表现典型临床症状的视频   |
| examine           | String       | 是       | “Xxx”           | 检查项目及结果             |
| examinePictures   | List<String> | 否       | ["url/to/pic0"] | 检查结果单                 |
| examineVideos     | List<String> | 否       | ["url/to/vid0"] | 检查结果视频               |
| diagonose         | String       | 是       | “Xxx”           | 临床诊断结果               |
| diagonosePictures | List<String> | 否       | ["url/to/pic0"] | 临床诊断结果图片           |
| diagonoseVideos   | List<String> | 否       | ["url/to/vid0"] | 临床诊断结果视频           |
| treatment         | String       | 是       | “Xxx”           | 治疗方案                   |
| treatmentPictures | List<String> | 否       | ["url/to/pic0"] | 治疗图片                   |
| treatmentVideos   | List<String> | 否       | ["url/to/vid0"] | 手术视频                   |

### 返回参数

```json
Data:[

]
```

## `PUT /admin/casestudy`

修改病例

### 发送参数

| 参数名称          | 类型         | 是否必须 | 实例            | 备注                       |
| ----------------- | ------------ | -------- | --------------- | -------------------------- |
| type              | String       | 是       | “寄生虫病”      | 大类，可能已经存在         |
| disease           | String       | 是       | “膀胱结石”      | 具体疾病类型，可能已经存在 |
| summary           | String       | 是       | “Xxx”           | 病例的基本情况             |
| summaryPictures   | List<String> | 否       | ["url/to/pic0"] | 能表现典型临床症状的照片   |
| summaryVideos     | List<String> | 否       | ["url/to/vid0"] | 能表现典型临床症状的视频   |
| examine           | String       | 是       | “Xxx”           | 检查项目及结果             |
| examinePictures   | List<String> | 否       | ["url/to/pic0"] | 检查结果单                 |
| examineVideos     | List<String> | 否       | ["url/to/vid0"] | 检查结果视频               |
| diagonose         | String       | 是       | “Xxx”           | 临床诊断结果               |
| diagonosePictures | List<String> | 否       | ["url/to/pic0"] | 临床诊断结果图片           |
| diagonoseVideos   | List<String> | 否       | ["url/to/vid0"] | 临床诊断结果视频           |
| treatment         | String       | 是       | “Xxx”           | 治疗方案                   |
| treatmentPictures | List<String> | 否       | ["url/to/pic0"] | 治疗图片                   |
| treatmentVideos   | List<String> | 否       | ["url/to/vid0"] | 手术视频                   |

### 返回参数

```json
Data:[

]
```

## `DELETE /admin/casestudy`

修改病例

### 发送参数

| 参数名称 | 类型   | 是否必须 | 实例       | 备注                       |
| -------- | ------ | -------- | ---------- | -------------------------- |
| disease  | String | 是       | “膀胱结石” | 具体疾病类型，可能已经存在 |

### 返回参数

```json
Data:[

]
```

## `POST /admin/roleplaying`

添加工作

### 请求参数

| 参数名称 | 类型    | 是否必须 | 实例           | 备注                              |
| -------- | ------- | -------- | -------------- | --------------------------------- |
| role     | Integer | 是       | 1              | 0代表前台、1代表医助、2代表兽医师 |
| job      | String  | 是       | “注射”         | 工作内容选择                      |
| title    | String  | 是       | "静脉注射"     | 名称                              |
| detail   | String  | 是       | "1. 备皮，..." | 具体信息                          |

### 返回参数

```json
Data:[
    
]
```

## `PUT /admin/roleplaying`

修改工作

### 请求参数

| 参数名称 | 类型    | 是否必须 | 实例           | 备注                              |
| -------- | ------- | -------- | -------------- | --------------------------------- |
| role     | Integer | 是       | 1              | 0代表前台、1代表医助、2代表兽医师 |
| job      | String  | 是       | “注射”         | 工作内容选择                      |
| title    | String  | 是       | "静脉注射"     | 名称                              |
| detail   | String  | 是       | "1. 备皮，..." | 具体信息                          |

### 返回参数

```json
Data:[
    
]
```

## `DELETE /admin/roleplaying`

添加工作

### 请求参数

| 参数名称 | 类型    | 是否必须 | 实例   | 备注                              |
| -------- | ------- | -------- | ------ | --------------------------------- |
| role     | Integer | 是       | 1      | 0代表前台、1代表医助、2代表兽医师 |
| job      | String  | 是       | “注射” | 工作内容选择                      |

### 返回参数

```json
Data:[
    
]
```

## `POST /admin/quiz`

添加试题

### 请求参数

| 参数名称     | 类型          | 是否必须 | 实例            | 备注     |
| ------------ | ------------- | -------- | --------------- | -------- |
| quizName     | String        | 是       | “测试1”         | 试卷名称 |
| totalCredits | Integer       | 是       | 100             | 总分     |
| probTexts    | List<String>  | 是       | ["。。。", “…”] | 题目     |
| probImgs     | List<Strings> | 是       | ["url", None]   | 图片路径 |
| probAns      | List<Integer> | 是       | [1, 2]          | 答案     |

### 返回参数

```json
Data:[

]
```

## `PUT /admin/quiz`

修改试题

### 请求参数

| 参数名称     | 类型          | 是否必须 | 实例            | 备注     |
| ------------ | ------------- | -------- | --------------- | -------- |
| quizName     | String        | 是       | “测试1”         | 试卷名称 |
| totalCredits | Integer       | 是       | 100             | 总分     |
| probTexts    | List<String>  | 是       | ["。。。", “…”] | 题目     |
| probImgs     | List<Strings> | 是       | ["url", None]   | 图片路径 |
| probAns      | List<Integer> | 是       | [1, 2]          | 答案     |

### 返回参数

```json
Data:[

]
```

## `DELETE /admin/quiz`

删除试题

### 请求参数

| 参数名称 | 类型    | 是否必须 | 实例    | 备注     |
| -------- | ------- | -------- | ------- | -------- |
| quizName | String  | 是       | “测试1” | 试卷名称 |
| probNum  | Integer | 是       | 3       | 题目     |

### 返回参数

```json
Data:[

]
```

## 