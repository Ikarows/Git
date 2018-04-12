> Git 命令行操作笔记

#### 安装
```bash
1.设置Git的user name和 email：
git config --global user.name "xxx"
git config --global user.email "xxx@xxx.com"

2.生成SSH密钥：
>密钥在生成提示的路径中查看,[id_rsa]为私人密钥,[id_rsa.pub]为公钥
ssh-keygen -t rsa -C "xxx@xxx.com"

3.在Github个人中心setting上添加ssh密钥，这要添加的是"id_rsa.pub"里面的公钥。
![Image text](https://github.com/Ikarows/git-use.md/blob/master/img/1.png)
```

#### 常用命令
>本地新建项目先运行 git init 进行初始化

```bash
# 克隆远程仓库项目
git clone xxx.git

# 添加文件 [所有文件用 .]
git add fileName

# 删除文件
git rm fileName

# 查看是否有所需要提交文件
git status
```

#### 提交所有操作到仓库
```bash
# 先提交到本地仓库
git commit -m "这是注释"

# 然后再提交到远程仓库
git push origin master
```

#### 常见问题
```bash
# 1.解决 Git pull/push 每次都需要输入密码问题， 运行后第一次需要输入账号密码，后面就不需要了.
git config --global credential.helper store

# 2.解决关于Git无法提交 index.lock File exists的问题
在目录中隐藏的.git 目录下找到index.lock 删除即可

```
