> Git 命令行操作笔记

#### 安装
1.安装Git，使用bash命令操作。 [Git下载](https://github-production-release-asset-2e65be.s3.amazonaws.com/23216272/caadf4ec-1641-11e8-8f85-577fa933ab56?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20180412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20180412T095723Z&X-Amz-Expires=300&X-Amz-Signature=296384b7630e2aa9010c13dbfb584fb7941230e50359d2a8138ee2a71d2e03c2&X-Amz-SignedHeaders=host&actor_id=25151659&response-content-disposition=attachment%3B%20filename%3DGit-2.16.2-64-bit.exe&response-content-type=application%2Foctet-stream)

2.设置Git的user name和 email：
```
git config --global user.name "xxx"
git config --global user.email "xxx@xxx.com"
```
![Image text](https://raw.githubusercontent.com/Ikarows/git-use.md/master/img/1.png)

3.生成SSH密钥：
密钥在生成提示的路径中查看，[id_rsa]为私人密钥，[id_rsa.pub]为公钥
```
ssh-keygen -t rsa -C "xxx@xxx.com"
```
![Image text](https://raw.githubusercontent.com/Ikarows/git-use.md/master/img/2.png)

4.在Github个人中心setting上添加ssh密钥，这要添加的是"id_rsa.pub"里面的公钥。

![Image text](https://raw.githubusercontent.com/Ikarows/git-use.md/master/img/3.png)
<br/></br>
<br/></br>

#### 常用命令
>本地新建项目先运行 git init 进行初始化

```bash
# 克隆远程仓库项目
git clone xxx.git

# 添加文件 [所有文件用 .]
git add fileName

# 删除文件
git rm fileName
```
<br/></br>

#### 提交所有操作到仓库
```bash
# 查看是否有所需要提交文件
git status

# 先提交到本地仓库
git commit -m "这是注释"

# 然后再提交到远程仓库
git push origin master
```
<br/></br>

#### 常见问题
```bash
# 1.解决 Git pull/push 每次都需要输入密码问题， 运行后第一次需要输入账号密码，后面就不需要了.
git config --global credential.helper store

# 2.解决关于Git无法提交 index.lock File exists的问题
在目录中隐藏的.git 目录下找到index.lock 删除即可

```
