# git 常用
``` js
git remote update origin --prune // 将远程分支更新到本地

git remote prune origin //删掉远程已经删除的本地分支

git reset --hard origin/master_all   // 切换到没有pull之前的代码

git branch -D 分支名 // 删除本地分支

git reset --soft HEAD^   // 把commit 过的记录撤回来，代码依然是改变过的

git merge --abort // 恢复到merge之前的代码

git config core.ignorecase false // 不忽略文件名大小写（git修改文件大小写名称不追踪问题）

npm i --force // 覆盖nodemodels 包

npm i --registry=https://registry.npm.taobao.org // 淘宝镜像下载依赖

```
## 代码回滚到指定版本
``` js

// 代码回滚 到指定版本
git  reflog // 查看记录
git reset --hard  + 版本号
git push origin HEAD --force //强推

```

## git与远程仓库建立链接
``` js

git remote -v   //查看修改前的仓库
git remote set-url origin xxx     //xxx代表新的仓库地址
git remote -v   //查看修改后的仓库

```