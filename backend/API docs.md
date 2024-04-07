# 0. 说明

## 常用status

```json
HTTP/1.1 401 Unauthorized
Content-Type: application/json
{
    "status": -1,
    "message": "身份验证失败"
    //一般来说，可能是token过期，或者是瞎填了个Token
}

HTTP/1.1 401 Unauthorized
Content-Type: application/json
{
    "status": -2,
    "message": "无对应权限"
    //一般来说，是指非管理员Authorization Token的情况
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": -3,
    "message": "缺少必选参数/多余参数/格式错误"
}

HTTP/1.1 500
Content-Type: application/json
{
    "status": -9,
    "message": "错误"
    //其他错误
}
```

# 1. 身份认证

## `POST /register`

新用户注册

### 请求参数

| 名称     | 位置 | 类型   | 必选 | 备注     |
| -------- | ---- | ------ | ---- | -------- |
| userName | Body | string | 是   | 用户名   |
| password | Body | string | 是   | 设定密码 |

`Example`

```json
POST /register
Content-Type: application/json
{
  "userName": "Truman",
  "password": "TheTrumanShow"
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注     |
| ------- | ---- | ------- | ---- | -------- |
| status  | Body | integer | 是   | 注册状态 |
| message | Body | string  | 是   | 信息     |
| userID  | Body | integer | 否   | 用户ID   |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
  "status": 0,
  "message": "注册成功",
  "userID":2
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
  "status": 1,
  "message": "重复的userName"
}
```

## `POST /login`

用户登录

### 请求参数

| 名称     | 位置 | 类型   | 必选 | 备注   |
| -------- | ---- | ------ | ---- | ------ |
| userName | Body | string | 是   | 用户名 |
| password | Body | string | 是   | 密码   |

`Example`

```json
POST /login
Content-Type: application/json
{
  "userName": "Truman",
  "password": "TheTrumanShow"
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注                 |
| ------- | ---- | ------- | ---- | -------------------- |
| status  | Body | integer | 是   | 状态                 |
| message | Body | string  | 是   | 信息                 |
| userID  | Body | integer | 是   | 用户ID               |
| token   | Body | string  | 否   | 登录成功后返回的 JWT |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
  "status": 0,
  "message": "登录成功",
  "userID":2,
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}

HTTP/1.1 401 Unauthorized
Content-Type: application/json
{
  "status": 1,
  "message": "userName或password错误"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
  "status": 2,
  "message": "无对应userName"
}
```

# 2. 病例学习

## `GET /casestudy/disease/type`

返回病例中存在的疾病大类

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |

`Example`

```json
GET /casestudy/disease/type
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称         | 位置 | 类型     | 必选 | 备注     |
| ------------ | ---- | -------- | ---- | -------- |
| status       | Body | integer  | 是   | 状态     |
| message      | Body | string   | 是   | 信息     |
| diseaseTypes | Body | string[] | 否   | 疾病大类 |

`Example`

```json

HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "diseaseTypes": ["寄生虫病","内科病","外科病"]
}
```

## `GET /casestudy/disease/list`

返回给定疾病大类对应疾病（存在于病例中）

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |
| diseaseType   | Body   | string | 是   | 疾病大类      |

`Example`

```json
GET /casestudy/disease/list?diseaseType="寄生虫病"
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称     | 位置 | 类型     | 必选 | 备注                 |
| -------- | ---- | -------- | ---- | -------------------- |
| status   | Body | integer  | 是   | 状态                 |
| message  | Body | string   | 是   | 信息                 |
| diseases | Body | object[] | 否   | 给定疾病大类对应疾病 |

对于diseases的元素

| 名称        | 位置 | 类型    | 必选 | 备注     |
| ----------- | ---- | ------- | ---- | -------- |
| diseaseID   | Body | integer | 是   | 疾病ID   |
| diseaseName | Body | string  | 是   | 疾病名称 |

`Example`

```json

HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 1,
    "message": "成功",
    "diseases": [
        {
            "diseaseID":1,
            "diseaseName":"蛔虫病"
        }
        {
            "diseaseID":2,
            "diseaseName":"精神分裂"
        }
    ]
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseType"
}
```

## `GET /casestudy/disease/detail`

返回疾病的详情

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| diseaseID     | Param  | integer | 是   | 疾病ID        |

`Example`

```json
GET /casestudy/disease/detail?diseaseID=1
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称         | 位置 | 类型    | 必选 | 备注     |
| ------------ | ---- | ------- | ---- | -------- |
| status       | Body | integer | 是   | 状态     |
| message      | Body | string  | 是   | 信息     |
| diseaseID    | Body | integer | 是   | 疾病ID   |
| diseaseName  | Body | string  | 是   | 疾病名称 |
| diseaseType  | Body | string  | 是   | 疾病大类 |
| diseaseIntro | Body | string  | 是   | 疾病简介 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "diseaseDetail": {
        "diseaseID":1,
        "diseaseName":"犬蛔虫病",
        "diseaseType": "寄生虫病",
        "diseaseIntro": "犬蛔虫病是幼犬最常见的一种寄生虫病。主要危害3周-5月龄的幼犬，重者可导致死亡。蛔虫病是幼犬肠套迭的主要因素之一。" 
    }
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseID"
}
```

## `GET /casestudy/case/list`

返回病例列表，有筛选处理
若未制定任何非必选参数，则返回所有病例

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| diseaseID     | Param  | integer | 是   | 疾病名称      |

`Example`

```json
GET /casestudy/case/list?diseaseID=1
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型     | 必选 | 备注 |
| ------- | ---- | -------- | ---- | ---- |
| status  | Body | integer  | 是   | 状态 |
| message | Body | string   | 是   | 信息 |
| cases   | Body | object[] | 否   | 病例 |

对于cases的元素

| 名称    | 位置 | 类型    | 必选 | 备注         |
| ------- | ---- | ------- | ---- | ------------ |
| caseID  | Body | integer | 是   | 病例ID       |
| summary | Body | string  | 是   | 病例基本情况 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "cases": [
        {
            "caseID": 1,
            "summary": "狗狗，腹痛多日……" 
        }
    ]
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseID"
}
```

## `GET /casestudy/case/detail`

返回某病例的具体信息

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| caseID        | Param  | integer | 是   | 病例ID        |

`Example`

```json
GET /casestudy/case/detail?caseID=1
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称              | 位置 | 类型     | 必选 | 备注                          |
| ----------------- | ---- | -------- | ---- | ----------------------------- |
| status            | Body | integer  | 是   | 状态                          |
| message           | Body | string   | 是   | 消息                          |
| caseID            | Body | integer  | 否   | 病例ID                        |
| diseaseType       | Body | string   | 否   | 疾病大类                      |
| diseaseID         | Body | integer  | 是   | 疾病ID                        |
| diseaseName       | Body | string   | 否   | 疾病名称                      |
| summary           | Body | string   | 否   | 病例的基本情况                |
| summaryPictures   | Body | string[] | 否   | 能表现典型临床症状的照片的URL |
| summaryVideos     | Body | string[] | 否   | 能表现典型临床症状的视频的URL |
| examine           | Body | string   | 否   | 检查项目及结果                |
| examinePictures   | Body | string[] | 否   | 检查结果单的URL               |
| examineVideos     | Body | string[] | 否   | 检查结果视频的URL             |
| diagnose          | Body | string   | 否   | 临床诊断结果                  |
| diagnosePictures  | Body | string[] | 否   | 临床诊断结果的图片的URL       |
| diagnoseVideos    | Body | string[] | 否   | 临床诊断结果视频的URL         |
| treatment         | Body | string   | 否   | 治疗方案                      |
| treatmentPictures | Body | string[] | 否   | 治疗图片的URL                 |
| treatmentVideos   | Body | string[] | 否   | 手术视频的URL                 |
| medicines         | Body | object[] | 否   | 用药信息                      |

对于medicines的元素

| 名称          | 位置 | 类型    | 必选 | 备注     |
| ------------- | ---- | ------- | ---- | -------- |
| medicineID    | Body | integer | 是   | 药品ID   |
| medicineName  | Body | string  | 是   | 药品名字 |
| medicineIntro | Body | string  | 是   | 药品简介 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "caseID": 1,
    "diseaseType": "寄生虫病",
    "diseaseID":1,
    "diseaseName": "蛔虫病",
    "summary": "狗狗，腹痛多日……",
    "summaryPictures": ["url/to/pic0"],
    "summaryVideos": ["url/to/vid0"],
    "examine": "经B超检查，发现……",
    "examinePictures": ["url/to/pic1", "url/to/pic2"],
    "examineVideos": ["url/to/vid1"],
    "diagnose": "膀胱结石",
    "diagnosePictures": ["url/to/pic1", "url/to/pic2"],
    "diagnoseVideos": ["url/to/vid1"],
    "treatment": "阿司匹林100000mg",
    "treatmentPictures": ["url/to/pic1", "url/to/pic2"],
    "treatmentVideos": ["url/to/vid0"],
    "medicines":[
        {
            "medicineID":1,
            "medicineName":"阿司匹林",
            "medicineIntro":"好药"
        }
    ]
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应caseID"
}

```

# 3. 疾病信息

简单来说，这部分接口返回的内容会比2里面更全
如果做单独浏览疾病信息的页面，可调用这边的接口
然后==管理页面==也可复用这边的接口获取列表

## `GET /disease/type`

返回数据库中存在的疾病大类

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |

`Example`

```json
GET /disease/type
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称         | 位置 | 类型     | 必选 | 备注     |
| ------------ | ---- | -------- | ---- | -------- |
| status       | Body | integer  | 是   | 状态     |
| message      | Body | string   | 是   | 信息     |
| diseaseTypes | Body | string[] | 否   | 疾病大类 |

`Example`

```json

HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "diseaseTypes": ["寄生虫病","内科病","外科病"]
}

```

## `GET /disease/list`

返回数据库中的疾病列表

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |
| diseaseType   | Param  | string | 否   | 疾病大类      |

`Example`

```json
GET /disease/list?page=1&pageSize=10&diseaseType="寄生虫病"
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称     | 位置 | 类型     | 必选 | 备注 |
| -------- | ---- | -------- | ---- | ---- |
| status   | Body | integer  | 是   | 状态 |
| message  | Body | string   | 是   | 信息 |
| diseases | Body | object[] | 否   | 疾病 |

对于diseases的元素

| 名称        | 位置 | 类型    | 必选 | 备注     |
| ----------- | ---- | ------- | ---- | -------- |
| diseaseID   | Body | integer | 是   | 疾病ID   |
| diseaseName | Body | string  | 是   | 疾病名称 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "diseases": [
        {
            "diseaseID":1,
            "diseaseName":"蛔虫病", 
        }
    ]
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseType"
}
```

## `GET /disease/detail`

返回疾病的详情

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| diseaseID     | Param  | integer | 是   | 疾病名称      |

`Example`

```json
GET /disease/detail?diseaseID=1
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称         | 位置 | 类型    | 必选 | 备注     |
| ------------ | ---- | ------- | ---- | -------- |
| status       | Body | integer | 是   | 状态     |
| message      | Body | string  | 是   | 信息     |
| diseaseID    | Body | integer | 否   | 疾病ID   |
| diseaseName  | Body | string  | 否   | 疾病名称 |
| diseaseType  | Body | string  | 否   | 疾病大类 |
| diseaseIntro | Body | string  | 否   | 疾病简介 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "diseaseID":1,
    "diseaseName":"犬蛔虫病",
    "diseaseType": "寄生虫病",
    "diseaseIntro": "犬蛔虫病是幼犬最常见的一种寄生虫病。主要危害3周-5月龄的幼犬，重者可导致死亡。蛔虫病是幼犬肠套迭的主要因素之一。" 
}

HTTP/1.1 
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseID"
}
```

# 4. 药品信息

## `GET /medicine/list`

返回数据库中的药品列表

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |

`Example`

```json
GET /medicine/list?page=1&pageSize=10&diseaseType="寄生虫病"
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称      | 位置 | 类型     | 必选 | 备注 |
| --------- | ---- | -------- | ---- | ---- |
| status    | Body | integer  | 是   | 状态 |
| message   | Body | string   | 是   | 信息 |
| medicines | Body | object[] | 否   | 药品 |

对于medicines的元素

| 名称         | 位置 | 类型    | 必选 | 备注     |
| ------------ | ---- | ------- | ---- | -------- |
| medicineID   | Body | integer | 是   | 药品ID   |
| medicineName | Body | string  | 是   | 药品名称 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "medicines": [
        {
            "medicineID":1,
            "medicineName":"阿司匹林"
        }
    ]
}

HTTP/1.1 404 NOT FOUND
Content-Type: application/json
{
    "status": 1,
    "message": "无药品数据"
}

```

## `GET /medicine/detail`

返回药品的详情

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| medicineID    | Param  | integer | 是   | 药品ID        |

`Example`

```json
GET /medicine/detail?medicineID=1
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称          | 位置 | 类型    | 必选 | 备注     |
| ------------- | ---- | ------- | ---- | -------- |
| status        | Body | integer | 是   | 状态     |
| message       | Body | string  | 是   | 信息     |
| medicineID    | Body | integer | 否   | 药品ID   |
| medicineName  | Body | string  | 否   | 药品名称 |
| medicineIntro | Body | string  | 否   | 药物简介 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "medicineID":1,
    "medicineName":"阿司匹林",
    "medicineIntro":"好药"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应medicineID"
}
```

# 5. 角色扮演

## `GET /roleplaying/list`

选择该角色工作职责

### 请求参数

| 名称 | 位置  | 类型    | 必选 | 备注                              |
| ---- | ----- | ------- | ---- | --------------------------------- |
| role | Param | integer | 是   | 0代表前台、1代表医助、2代表兽医师 |

`Example`

```json
GET /roleplaying/list?role=0
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型     | 必选 | 备注         |
| ------- | ---- | -------- | ---- | ------------ |
| status  | Body | integer  | 是   | 状态         |
| message | Body | string   | 是   | 消息         |
| jobs    | Body | string[] | 否   | 工作内容选择 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "jobs": ["注射", "术前准备"]
}


HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应role"
}
```

## `GET /roleplaying/detail`

具体工作流程

### 请求参数

| 名称 | 位置  | 类型    | 必选 | 备注                                    |
| ---- | ----- | ------- | ---- | --------------------------------------- |
| role | Param | integer | 是   | 角色，0代表前台、1代表医助、2代表兽医师 |
| job  | Param | string  | 是   | 工作内容选择                            |

`Example`

```json
GET /roleplaying/detail?role=2&job=注射
: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9


GET /roleplaying/list?role=1
Authorization: fakeToken
```

### 返回响应

| 名称      | 位置 | 类型    | 必选 | 备注 |
| --------- | ---- | ------- | ---- | ---- |
| status    | Body | integer | 是   | 状态 |
| message   | Body | string  | 是   | 消息 |
| jobDetail | Body | string  | 否   | 任务 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "jobDetail": "注射成功"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应role",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 2,
    "message": "无对应job",
}

```

# 6. 在线测试

## `GET /quiz/list`

所有的考试

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |

`Example`

```json
GET /quiz/list?userID=2
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称          | 位置   | 类型     | 必选 | 备注          |
| ------------- | ------ | -------- | ---- | ------------- |
| status        | Body   | integer  | 是   | 状态          |
| message       | Body   | string   | 是   | 消息          |
| quizzes       | Body   | object[] | 否   | quiz          |
| Authorization | Header | string   | 是   | 身份验证token |

对于quizzes的元素

| 名称         | 位置 | 类型    | 必选 | 备注     |
| ------------ | ---- | ------- | ---- | -------- |
| quizID       | Body | integer | 是   | 测试ID   |
| quizName     | Body | string  | 是   | 测试名称 |
| totalCredits | Body | integer | 是   | 总分     |
| lastTry      | Body | integer | 否   | 上次得分 |
| lastTryTime  | Body | string  | 否   | 上次时间 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "quizzes": [
        {
            "quizID":1,
            "quizName": "测试1",
            "totalCredits": 100,
            "lastTry": 30,
            "lastTryTime": "2024年11月20日 11:59PM"
        },
        {
            "quizID":2,
            "quizName": "测试2",
            "totalCredits": 50,
        }
    ]
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应userID",
}
```

## `GET /quiz/detail`

某个考试

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| quizID        | Param  | string | 是   | quizID        |
| Authorization | Header | string | 是   | 身份验证token |

`Example`

```javascript
GET /quiz/detail?quizID=1&userID=2
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称         | 位置 | 类型     | 必选 | 备注     |
| ------------ | ---- | -------- | ---- | -------- |
| status       | Body | integer  | 是   | 状态     |
| message      | Body | string   | 是   | 消息     |
| quizName     | Body | string   | 否   | 测试名称 |
| totalCredits | Body | integer  | 否   | 总分     |
| lastTry      | Body | integer  | 否   | 上次得分 |
| lastTryTime  | Body | string   | 否   | 上次时间 |
| probs        | Body | object[] | 否   | 题目     |

对于probs的元素

| 名称       | 位置 | 类型    | 必选 | 备注     |
| ---------- | ---- | ------- | ---- | -------- |
| probCredit | Body | integer | 是   | 题目分数 |
| probText   | Body | string  | 是   | 题目     |
| probImg    | Body | string  | 否   | 图片路径 |
| probAns    | Body | integer | 是   | 答案     |
| lastAns    | Body | integer | 否   | 上次选项 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "quizName": "测试1",
    "totalCredits": 20,
    "lastTry": 30,
    "lastTryTime": "2024年11月20日 11:59PM",
    "probs":[
        {
            "probNumber": 1,
            "probCredit": 10,
            "probText": "我是谁",
            "probImg": "url",
            "probAns": 1,
            "lastAns": 1
        },
        {
            "probNumber": 2,
            "probCredit": 10,
            "probText": "你是谁",
            "probAns": 2
        }
    ]
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应quizID",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 2,
    "message": "无对应userID",
}
```

## `POST /quiz/result`

考试结果录入
TODO: 个人觉得probNumber应换成probID，试卷中题目题号前端自行给定就行

### 请求参数

| 名称    | 位置 | 类型     | 必选 | 备注       |
| ------- | ---- | -------- | ---- | ---------- |
| quizID  | Body | string   | 是   | 试卷ID     |
| userID  | Body | string   | 是   | 考生ID     |
| credit  | Body | integer  | 是   | 成绩       |
| answers | Body | object[] | 是   | 题目及选项 |

对于answers的元素

| 名称       | 位置 | 类型    | 必选 | 备注     |
| ---------- | ---- | ------- | ---- | -------- |
| probNumber | Body | integer | 是   | 题号     |
| ans        | Body | integer | 是   | 考生选择 |

`Example`

```json
POST /quiz/result
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "quizID": 1,
    "userID": 2,
    "credit": 100,
    "answers": [
        {
            "probNumber":1,
            "ans": 1
        }
        {
            "probNumber":2,
            "ans": 2
        }
    ]
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应quizID",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 2,
    "message": "无对应userID",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 3,
    "message": "无对应probNumber",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 4,
    "message": "无对应probAns",
}
```

# 7. 3D导览

## `GET /3DVirtualTour/item/detail`

获取3D虚拟导览中物品详情

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| itemID        | Param  | integer | 是   | 物品ID        |

`Example`

```json
GET /3DVirtualTour/item/detail?itemID=1
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称      | 位置 | 类型    | 必选 | 备注     |
| --------- | ---- | ------- | ---- | -------- |
| status    | Body | integer | 是   | 状态     |
| message   | Body | string  | 是   | 消息     |
| itemName  | Body | string  | 否   | 物品名   |
| itemIntro | Body | string  | 否   | 物品简介 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "itemName":"手术刀",
    "itemIntro":"手术刀很大也很小"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应itemID"
}

```

## `GET /3DVirtualTour/department/list`

获取3D虚拟导览中科室列表
列表中展示科室的ID和科室名

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |

`Example`

```json
GET /3DVirtualTour/department/list
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称        | 位置 | 类型     | 必选 | 备注   |
| ----------- | ---- | -------- | ---- | ------ |
| status      | Body | integer  | 是   | 状态   |
| message     | Body | string   | 是   | 消息   |
| departments | Body | object[] | 否   | 各科室 |

对于departments的元素

| 名称           | 位置 | 类型    | 必选 | 备注     |
| -------------- | ---- | ------- | ---- | -------- |
| departmentID   | Body | integer | 是   | 科室ID   |
| departmentName | Body | string  | 是   | 科室名称 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "departments":[
        {
            "departmentID":1,
            "departmentName":"手术室"
        },
        {
            "departmentID":2,
            "departmentName":"手术室"
        }
    ]
}

```

## `GET /3DVirtualTour/department/detail`

获取3D虚拟导览中科室详情

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| departmentID  | Param  | integer | 是   | 科室ID        |

`Example`

```json
GET /3DVirtualTour/department/detail?departmentID=1
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称            | 位置 | 类型      | 必选 | 备注     |
| --------------- | ---- | --------- | ---- | -------- |
| status          | Body | integer   | 是   | 状态     |
| message         | Body | string    | 是   | 消息     |
| departmentName  | Body | string    | 否   | 科室名   |
| departmentIntro | Body | string    | 否   | 科室信息 |
| departmentItems | Body | integer[] | 否   | ItemID   |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "departmentName":"手术室",
    "departmentIntro":"手术室很大也很小",
    "departmentItems":[1,2,3]
}

```

# 8. 后台管理

## `GET /admin/user`

获取所有用户

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |

`Example`

```json
GET /admin/users
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型     | 必选 | 备注     |
| ------- | ---- | -------- | ---- | -------- |
| status  | Body | integer  | 是   | 状态     |
| message | Body | string   | 是   | 消息     |
| users   | Body | object[] | 是   | 所有用户 |

对于users的元素

| 名称     | 位置 | 类型    | 必选 | 备注         |
| -------- | ---- | ------- | ---- | ------------ |
| userID   | Body | integer | 是   | 用户ID       |
| userName | Body | string  | 是   | 用户名称     |
| isAdmin  | Body | boolean | 是   | 是否为管理员 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
    "users": [
        {
            "userID":2,
            "userName": "Truman",
            "isAdmin": false
        },
        {
            "userID":1,
            "userName": "Admin",
            "isAdmin": true
        }
    ]
}

```

## `POST /admin/user`

添加用户

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| userName      | Body   | sring   | 是   | 用户名        |
| password      | Body   | string  | 是   | 用户密码      |
| isAdmin       | Body   | boolean | 是   | 是否为管理员  |
| Authorization | Header | string  | 是   | 身份验证token |

`Example`

```json
POST /admin/user
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "userName": "Allen Yung",
    "password": "foejwoghwoi",
    "isAdmin": true
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注     |
| ------- | ---- | ------- | ---- | -------- |
| status  | Body | integer | 是   | 状态     |
| message | Body | string  | 是   | 消息     |
| userID  | Body | integer | 否   | 新用户ID |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
    "userID":3
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 1,
    "message": "重复的userName"
}
```

## `PUT /admin/user`

修改用户信息

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| userID        | Body   | integer | 是   | 用户ID        |
| userName      | Body   | sring   | 否   | 用户名        |
| password      | Body   | string  | 否   | 用户密码      |
| isAdmin       | Body   | boolean | 否   | 是否为管理员  |

`Example`

```json
PUT /admin/user
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "userID":3,
    "userName": "Allen Yung",
    "isAdmin": true
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应userID"
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 2,
    "message": "重复的userName"
}
```

## `DELETE /admin/user`

删除用户信息

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| userID        | Param  | integer | 是   | 用户名        |
| Authorization | Header | string  | 是   | 身份验证token |

`Example`

```json
DELETE /admin/user?userID=3
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应userID"
}

```

## `POST /admin/disease`

添加新疾病
疾病不可重名

### 发送参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |
| diseaseType   | Body   | string | 是   | 疾病大类      |
| diseaseName   | Body   | string | 是   | 疾病名称      |
| diseaseIntro  | Body   | string | 是   | 疾病简介      |

`Example`

```json
POST /admin/disease
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "diseaseName": "狂犬病",
    "diseaseType": "传染病",
    "diseaseIntro": "狂犬病（rabies）是狂犬病毒所致的人畜共患急性传染病，多见于犬、猫、野生或流浪的哺乳类肉食动物，如狼、狐狸、獾、蝙蝠等"
}

```

### 返回响应

| 名称      | 位置 | 类型    | 必选 | 备注       |
| --------- | ---- | ------- | ---- | ---------- |
| status    | Body | integer | 是   | 状态       |
| message   | Body | string  | 是   | 消息       |
| diseaseID | Body | integer | 否   | 新疾病的ID |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
    "diseaseID":3
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 1,
    "message": "重复的diseaseName"
}

```

## `PUT /admin/disease`

修改疾病信息

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| diseaseID     | Body   | integer | 是   | 疾病ID        |
| diseaseType   | Body   | string  | 否   | 疾病大类      |
| diseaseName   | Body   | string  | 否   | 疾病名称      |
| diseaseIntro  | Body   | string  | 否   | 疾病简介      |

`Example`

```json
PUT /admin/disease
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "diseaseID":3,
    "diseaseType": "烈性传染病",
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseID"
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 2,
    "message": "重复的diseaseName"
}

```

## `DELETE /admin/disease`

删除疾病信息

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| diseaseID     | Param  | integer | 是   | 用户名        |
| Authorization | Header | string  | 是   | 身份验证token |

`Example`

```json
DELETE /admin/disease?diseaseID=3
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseID"
}

```

## `POST /admin/medicine`

添加新药品

### 发送参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |
| medicineName  | Body   | string | 是   | 药品名称      |
| medicineIntro | Body   | string | 是   | 药物简介      |

`Example`

```json
POST /admin/medicine
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "medicineName": "肾上腺素",
    "medicineIntro": "肾上腺素是一种激素和神经传送体，由肾上腺释放。肾上腺素会使心脏收缩力上升，使心脏、肝、和筋骨的血管扩张和皮肤、粘膜的血管收缩，是拯救濒死的人或动物的必备品"
}

```

### 返回响应

| 名称       | 位置 | 类型    | 必选 | 备注   |
| ---------- | ---- | ------- | ---- | ------ |
| status     | Body | integer | 是   | 状态   |
| message    | Body | string  | 是   | 消息   |
| medicineID | Body | integer | 否   | 药品ID |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
    "medicineID":2
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 1,
    "message": "重复的medicineName"
}

```

## `PUT /admin/medicine`

修改药品信息

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| medicineID    | Body   | integer | 是   | 药品ID        |
| medicineName  | Body   | string  | 否   | 药品名称      |
| medicineIntro | Body   | string  | 否   | 药品简介      |

`Example`

```json
PUT /admin/medicine
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "medicineID":2,
    "medicineIntro": "本品为(R)-4-(2-(甲氨基)-1-羟基乙基]-1,2-苯二酚，按干燥品计算，含C9H13NO3不得少于98.5%。",
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 1,
    "message": "重复的medicineName"
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 404,
    "message": "无对应medicineID"
}
```

## `DELETE /admin/medicine`

删除药品信息

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| medicineID    | Param  | integer | 是   | 用户名        |

`Example`

```json
DELETE /admin/medicine?medicineID=2
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应medicineID"
}

```

## `GET /admin/case`

返回病例列表
若未制定任何非必选参数，则返回所有病例

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| diseaseType   | Param  | string  | 是   | 疾病大类      |
| diseaseID     | Param  | integer | 是   | 疾病ID        |

`Example`

```json
GET /admin/case?diseaseID=1
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型     | 必选 | 备注 |
| ------- | ---- | -------- | ---- | ---- |
| status  | Body | integer  | 是   | 状态 |
| message | Body | string   | 是   | 信息 |
| cases   | Body | object[] | 否   | 病例 |

对于cases的元素

| 名称    | 位置 | 类型    | 必选 | 备注         |
| ------- | ---- | ------- | ---- | ------------ |
| caseID  | Body | integer | 是   | 病例ID       |
| summary | Body | string  | 是   | 病例基本情况 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0,
    "message": "成功",
    "cases": [
        {
            "caseID": 1,
            "summary": "狗狗，腹痛多日……" 
        }
    ]
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseType"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 2,
    "message": "无对应diseaseID"
}

```

## `POST /admin/case`

添加病例
当填写数据库中未有条目时，报错

### 发送参数

| 名称              | 位置   | 类型      | 必选 | 备注                          |
| ----------------- | ------ | --------- | ---- | ----------------------------- |
| diseaseID         | Body   | integer   | 是   | 疾病ID                        |
| summary           | Body   | string    | 是   | 病例的基本情况                |
| summaryPictures   | Body   | string[]  | 是   | 能表现典型临床症状的照片的URL |
| summaryVideos     | Body   | string[]  | 是   | 能表现典型临床症状的视频的URL |
| examine           | Body   | string    | 是   | 检查项目及结果                |
| examinePictures   | Body   | string[]  | 是   | 检查结果单的URL               |
| examineVideos     | Body   | string[]  | 是   | 检查结果视频的URL             |
| diagnose          | Body   | string    | 是   | 临床诊断结果                  |
| diagnosePictures  | Body   | string[]  | 是   | 临床诊断结果的图片的URL       |
| diagnoseVideos    | Body   | string[]  | 是   | 临床诊断结果视频的URL         |
| treatment         | Body   | string    | 是   | 治疗方案                      |
| treatmentPictures | Body   | string[]  | 是   | 治疗图片的URL                 |
| treatmentVideos   | Body   | string[]  | 是   | 手术视频的URL                 |
| medicines         | Body   | integer[] | 是   | 药品ID                        |
| Authorization     | Header | string    | 是   | 身份验证token                 |

`Example`

```json
POST /admin/case
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "diseaseID": 1,
    "summaryPictures": ["url/to/pic0"],
    "summaryVideos": ["url/to/vid0"],
    "examine": "经B超检查，发现……",
    "examinePictures": ["url/to/pic1", "url/to/pic2"],
    "examineVideos": ["url/to/vid1"],
    "diagnose": "膀胱结石",
    "diagnosePictures": ["url/to/pic1", "url/to/pic2"],
    "diagnoseVideos": ["url/to/vid1"],
    "treatment": "阿司匹林100000mg",
    "treatmentPictures": ["url/to/pic1", "url/to/pic2"],
    "treatmentVideos": ["url/to/vid0"],
    "medicines":[1,2]
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注   |
| ------- | ---- | ------- | ---- | ------ |
| status  | Body | integer | 是   | 状态   |
| message | Body | string  | 是   | 消息   |
| caseID  | Body | integer | 否   | 病例ID |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
    "caseID":1
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应diseaseID"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 2,
    "message": "无对应medicineID"
}

```

## `PUT /admin/case`

修改病例

### 发送参数

| 名称              | 位置   | 类型      | 必选 | 备注                          |
| ----------------- | ------ | --------- | ---- | ----------------------------- |
| Authorization     | Header | string    | 是   | 身份验证token                 |
| caseID            | Body   | integer   | 是   | 病例ID                        |
| diseaseID         | Body   | integer   | 否   | 疾病ID                        |
| summary           | Body   | string    | 否   | 病例的基本情况                |
| summaryPictures   | Body   | string[]  | 否   | 能表现典型临床症状的照片的URL |
| summaryVideos     | Body   | string[]  | 否   | 能表现典型临床症状的视频的URL |
| examine           | Body   | string    | 否   | 检查项目及结果                |
| examinePictures   | Body   | string[]  | 否   | 检查结果单的URL               |
| examineVideos     | Body   | string[]  | 否   | 检查结果视频的URL             |
| diagnose          | Body   | string    | 否   | 临床诊断结果                  |
| diagnosePictures  | Body   | string[]  | 否   | 临床诊断结果的图片的URL       |
| diagnoseVideos    | Body   | string[]  | 否   | 临床诊断结果视频的URL         |
| treatment         | Body   | string    | 否   | 治疗方案                      |
| treatmentPictures | Body   | string[]  | 否   | 治疗图片的URL                 |
| treatmentVideos   | Body   | string[]  | 否   | 手术视频的URL                 |
| medicines         | Body   | integer[] | 否   | 药品ID                        |

`Example`

```json
PUT /admin/case
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "caseID": 1,
    "summary": "狗狗，浑身痛多日……",
    "medicines":[1,3]
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应caseID"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 2,
    "message": "无对应diseaseID"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 3,
    "message": "无对应medicineID"
}


```

## `DELETE /admin/case`

删除病例

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| caseID        | Param  | integer | 是   | 病例id        |

`Example`

```json
DELETE /admin/case?caseID=1
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应caseID"
}
```

## `POST /admin/roleplaying`

添加job

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注                              |
| ------------- | ------ | ------- | ---- | --------------------------------- |
| Authorization | Header | string  | 是   | 身份验证token                     |
| role          | Body   | integer | 是   | 0代表前台、1代表医助、2代表兽医师 |
| job           | Body   | string  | 是   | 工作内容选择                      |
| jobDetail     | Body   | string  | 是   | job详情                           |

`Example`

```json
POST /admin/roleplaying
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "role":1,
    "job":"注射",
    "jobDetail":"静脉注射"
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应role"
}
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 2, 
    "message": "重复的job",
}

```

## `PUT /admin/roleplaying`

修改job、jobDetail

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注                                                        |
| ------------- | ------ | ------- | ---- | ----------------------------------------------------------- |
| Authorization | Header | string  | 是   | 身份验证token                                               |
| role          | Body   | integer | 是   | 0代表前台、1代表医助、2代表兽医师                           |
| prevJob       | Body   | string  | 否   | 要修改的工作名                                              |
| job           | Body   | string  | 是   | 修改后的工作名或要修改工作详情的工作名(当prevJob undifined) |
| jobDetail     | Body   | string  | 是   | job详情                                                     |

`Example`

```json
PUT /admin/roleplaying
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "role":1,
    "prevJob":"要注射",
    "job":"注射",
    "jobDetail":"动脉注射"
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应role"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 2,
    "message": "无对应job"
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 3,
    "message": "重复的job"
}
```

## `DELETE /admin/roleplaying`

删除job

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 备注                              |
| ------------- | ------ | ------- | ---- | --------------------------------- |
| role          | Body   | integer | 是   | 0代表前台、1代表医助、2代表兽医师 |
| job           | Body   | string  | 是   | 工作内容选择                      |
| Authorization | Header | string  | 是   | 身份验证token                     |

`Example`

```json
DELETE /admin/roleplaying?role=1&job="注射"
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应role"
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 2,
    "message": "无对应job"
}
```

## `POST /admin/quiz`

添加试卷

### 请求参数

| 名称          | 位置   | 类型     | 必选 | 备注          |
| ------------- | ------ | -------- | ---- | ------------- |
| Authorization | Header | string   | 是   | 身份验证token |
| quizName      | Body   | string   | 是   | 测试名称      |
| totalCredits  | Body   | integer  | 是   | 总分          |
| probs         | Body   | object[] | 是   | 题目          |

对于probs的元素

| 名称       | 位置 | 类型    | 必选 | 备注     |
| ---------- | ---- | ------- | ---- | -------- |
| probCredit | Body | integer | 是   | 题目分数 |
| probText   | Body | string  | 是   | 题目     |
| probImg    | Body | string  | 否   | 图片路径 |
| probAns    | Body | integer | 是   | 答案     |
| lastAns    | Body | integer | 否   | 上次选项 |

`Example`

```json
POST /admin/quiz
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "quizName":"测试1",
    "totalCredits":20,
    "probs":[
        {
            "probCredit": 10,
            "probText": "我是谁",
            "probImg": "url",
            "probAns": 1,
        },
        {
            "probCredit": 10,
            "probText": "你是谁",
            "probAns": 2
        }
    ]
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注     |
| ------- | ---- | ------- | ---- | -------- |
| status  | Body | integer | 是   | 状态     |
| message | Body | string  | 是   | 消息     |
| quizID  | Body | integer | 否   | quiz编号 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
    "quizID":3
}

HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "status": 1,
    "message": "重复的quizName"
}

```

## `PUT /admin/quiz`

修改试题

### 请求参数

| 名称          | 位置   | 类型     | 必选 | 备注          |
| ------------- | ------ | -------- | ---- | ------------- |
| Authorization | Header | string   | 是   | 身份验证token |
| quizID        | Body   | string   | 是   | 测试名称      |
| quizName      | Body   | string   | 否   | 测试名称      |
| totalCredits  | Body   | integer  | 否   | 总分          |
| probs         | Body   | object[] | 否   | 题目          |

对于probs的元素

| 名称       | 位置 | 类型    | 必选 | 备注     |
| ---------- | ---- | ------- | ---- | -------- |
| probCredit | Body | integer | 否   | 题目分数 |
| probText   | Body | string  | 否   | 题目     |
| probImg    | Body | string  | 否   | 图片路径 |
| probAns    | Body | integer | 否   | 答案     |
| lastAns    | Body | integer | 否   | 上次选项 |

`Example`

```json
PUT /admin/quiz
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "quizID":1,
    "quizName":"测试1",
    "totalCredits":20,
    "probs":[
        {
            "probCredit": 10,
            "probText": "我是谁",
            "probImg": "url",
            "probAns": 1,
        },
        {
            "probCredit": 10,
            "probText": "你是谁",
            "probAns": 2
        }
    ]
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应quizName"
}

```

## `DELETE /admin/quiz`

删除试题

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 备注          |
| ------------- | ------ | ------ | ---- | ------------- |
| Authorization | Header | string | 是   | 身份验证token |
| quizID        | Body   | String | 是   | quiz编号      |

`Example`

```json
DELETE /admin/quiz?quizID=1
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应quizName"
}

```

## `PUT /admin/item`

修改物品信息

### 发送参数

| 名称          | 位置   | 类型    | 必选 | 备注          |
| ------------- | ------ | ------- | ---- | ------------- |
| Authorization | Header | string  | 是   | 身份验证token |
| itemID        | Body   | integer | 是   | 物品ID        |
| itemName      | Body   | string  | 否   | 物品名称      |
| itemIntro     | Body   | string  | 否   | 物品简介      |

`Example`

```json
PUT /admin/disease
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "itemID":1,
    "itemIntro": "手术刀不大不小"
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应itemID"
}

```

## `PUT /admin/department`

修改物品信息

### 发送参数

| 名称            | 位置   | 类型    | 必选 | 备注          |
| --------------- | ------ | ------- | ---- | ------------- |
| Authorization   | Header | string  | 是   | 身份验证token |
| departmentID    | Body   | integer | 是   | 科室ID        |
| departmentName  | Body   | string  | 否   | 科室名称      |
| departmentIntro | Body   | string  | 否   | 科室简介      |

`Example`

```json
PUT /admin/disease
Authorization: ADMINGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Content-Type: application/json
{
    "departmentID":1,
    "departmentIntro": "手术室不大不小"
}
```

### 返回响应

| 名称    | 位置 | 类型    | 必选 | 备注 |
| ------- | ---- | ------- | ---- | ---- |
| status  | Body | integer | 是   | 状态 |
| message | Body | string  | 是   | 消息 |

`Example`

```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "status": 0, 
    "message": "成功",
}

HTTP/1.1 404 Not Found
Content-Type: application/json
{
    "status": 1,
    "message": "无对应departmentID"
}

```
