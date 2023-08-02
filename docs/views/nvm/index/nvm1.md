# nvm 常用命令
``` js
nvm use node版本号    // 切换node版本

nvm off                     // 禁用node.js版本管理(不卸载任何东西)

nvm on                      // 启用node.js版本管理

nvm install <version>       // 安装node.js的命名 version是版本号 例如：nvm install 8.12.0

nvm uninstall <version>     // 卸载node.js是的命令，卸载指定版本的nodejs，当安装失败时卸载使用

nvm ls                      // 显示所有安装的node.js版本

nvm list available          // 显示可以安装的所有node.js的版本

nvm use <version>           // 切换到使用指定的nodejs版本

nvm v                       // 显示nvm版本

nvm install stable          // 安装最新稳定版


npm config set strict-ssl false    // 禁用证书

npm config set strict-ssl false


strict-ssl: strict-ssl 是 npm 的一个选项，控制是否严格校验 SSL 证书。默认情况下，npm 在下载和安装包时会验证服务器的 SSL 证书。将该选项设置为 false，意味着取消对 SSL 证书的严格验证。

false: false 是将 strict-ssl 选项设置为的值。通过将其设置为 false，npm 将不再强制要求 SSL 证书的有效性。
```