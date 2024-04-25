# PetClinicMock
A web application that simulates a pet clinic. 

## Backend Server
```shell
    cd backend/src
    npm install
    node server.js
```

## Frontend Server
```shell
    cd frontend/petclinicmock_frontend
    npm ci
    npm run serve
```
# 云部署项目
以阿里云为例
## 配置git环境并设置ssh
```shell
    yum install git -y
    git config --global user.name "xxx"
    git config --global user.email "xxxxxxx@qq.com"
    ssh-keygen -t rsa -C 'xxxxxxx@qq.com'
    git clone ssh路径
```
## 部署Apache服务
```shell
    yum install -y httpd
    systemctl start httpd
    systemctl enable httpd
    systemctl status httpd
```
## 部署Node.js环境
```shell
    echo ". ~/.nvm/nvm.sh" >> /etc/profile
    source /etc/profile
    export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
    nvm list-remote
    nvm install v20.12.0
    nvm use v20.12.0
```
## 部署redis
```shell
    sudo systemctl stop firewalld
    tar -zxvf redis-6.2.4.tar.gz
    mv redis-6.2.4 /usr/local/
    cd /usr/local/redis-6.2.4/
    make
    ./bin/redis-server ./redis.conf
    chmod 777 bin/redis-server redis.conf
    ./bin/redis-cli
```
## 设置项目窗口
```shell
    sudo systemctl disable firewalld
    yum install screen 
    screen -ls
    screen -S  [name]
    run Backend Server
    run Frontend Server
```
    
    
