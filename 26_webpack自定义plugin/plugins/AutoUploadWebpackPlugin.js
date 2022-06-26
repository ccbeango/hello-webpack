const { NodeSSH } = require('node-ssh');

class AutoUploadWebpackPlugin {
  constructor(options) {
    this.options = options;
    this.ssh = new NodeSSH();
  }

  // 插件必须实现apply方法
  apply(compiler) {
    // 监听输出 asset 到 output 目录之后执行的Hook
    compiler.hooks.afterEmit.tapAsync('AutoUploadWebpackPlugin', async (compilation, callback) => {
      // 1. 获取打包输出目录
      const outputPath = compilation.outputOptions.path;
      console.log('打包了', outputPath)

      // 2. 创建SSH连接
      await this.connectServer()

      // 3. 删除服务端之前的资源文件
      const serverDir = this.options.remotePath;
      this.ssh.execCommand(`rm -rf ${serverDir}/*`);

      // 4. 上传文件
      this.uploadFiles(outputPath, serverDir)

      // 5. 断开SSH连接
      this.ssh.dispose();

      callback();
    });
  }

  async connectServer() {
    try {
      await this.ssh.connect({
        host: this.options.host,
        username: this.options.username,
        password: this.options.password
      });
      console.log('连接成功~');
    } catch (error) {
      console.log('连接失败：', error);
    }
  }

  async uploadFiles(localPath, remotePath) {
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      recursive: true,
      concurrency: 10
    });
    console.log('传送到服务器: ', status ? "成功": "失败");
  }
}

module.exports = AutoUploadWebpackPlugin;