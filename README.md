# NEXUS Future Interface

一个基于原生 JavaScript 和 Tailwind CSS 构建的未来风格交互式网页。无需构建工具，开箱即用。

## 目录结构

- `index.html`: 入口文件
- `styles/`: 样式文件
- `scripts/`: 功能模块 (粒子, 打字机, 滚动, 倾斜效果)

## 如何部署到 GitHub Pages

1. **创建仓库**: 在 GitHub 上创建一个新仓库（例如 `nexus-future`）。
2. **上传文件**: 将本项目的所有文件直接上传到仓库根目录。
   - 确保 `index.html` 在根目录下。
   - 确保 `scripts` 和 `styles` 文件夹完整上传。
3. **开启 Pages**:
   - 进入仓库 **Settings** (设置) -> **Pages**。
   - 在 **Source** 下选择 `Deploy from a branch`。
   - 在 **Branch** 下选择 `main` (或 `master`) 和 `/ (root)`。
   - 点击 **Save**。
4. **访问**: 等待几分钟后，GitHub 会提供一个链接（通常是 `https://你的用户名.github.io/仓库名/`），点击即可访问。

## 本地运行

直接双击 `index.html` 或者使用 VS Code 的 "Live Server" 插件打开即可。

## 自定义

- 修改 `scripts/typing.js` 中的 `words` 数组来改变打字机的文本。
- 修改 `tailwind.config` (在 index.html 中) 来调整主题颜色。
