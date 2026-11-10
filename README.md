# 机械制造基础 II 课程讲义（在线版）

西北工业大学《机械制造基础 II》课程教学讲义，2026 年秋季学期，共 **10 讲、532 页**。

- **课程教师**：周计明（zhoujm@nwpu.edu.cn）
- **在线访问**：<https://kivinchoa01.github.io/fund-manufacturing/>
- **Gitee 仓库**：<https://gitee.com/zhou-jiming/fund-manufacturing>
- **GitHub 镜像**：<https://github.com/kivinchoa01/fund-manufacturing>

## 页面功能

- 首页按“课程导引 / 材料成形 / 切削加工”三个模块列出 10 讲，点击章节卡片在**新标签页**打开该讲讲义，目录页保持不动。
- 阅读页使用自托管的 PDF.js 渲染讲义，支持缩略图/目录侧栏、缩放、页码跳转、手机阅读与全屏演示。
- 阅读页顶栏提供：返回目录、章节下拉切换、上一讲/下一讲、下载本讲 PDF、打开原始 PDF、加载线路切换。
- PDF 默认通过 jsDelivr CDN 加载；CDN 不可用时自动切换到本站直连，也可手动切换。
- 讲义中的外部超链接在站内浮层中打开，**不退出全屏演示**；B 站视频链接自动转换为内嵌播放器。
- 浮层右上角“新窗口”按钮用于少数禁止 iframe 嵌入的网站；按 `Esc` 或点击浮层外的遮罩可关闭。

## 章节目录

| 编号 | 章节 | 页数 | 模块 | 主要内容 |
|---|---|---:|---|---|
| 01 | 课程概述 | 7 | 课程导引 | 课程定位、教学内容与学时安排、考核方式 |
| 02 | 绪论 | 37 | 课程导引 | 制造与制造业、产品构成、材料成形与切削加工方法概览 |
| 03 | 铸造 | 68 | 材料成形 | 液态金属充型与收缩、砂型铸造、特种铸造、铸造工艺与缺陷 |
| 04 | 压力加工 | 100 | 材料成形 | 塑性变形、锻造、轧制、挤压、拉拔、冲压 |
| 05 | 焊接 | 71 | 材料成形 | 焊接分类、焊接电弧与冶金、常用焊接方法、焊接缺陷 |
| 06 | 毛坯成形方法选择及质量控制 | 14 | 材料成形 | 毛坯分类、成形方法选择原则、质量控制 |
| 07 | 切削加工基础知识 | 82 | 切削加工 | 切削要素、刀具角度、切削过程、刀具材料、磨削基础 |
| 08 | 零件表面的加工方法 | 73 | 切削加工 | 车/铣/钻/镗/磨、齿形加工、精整与特种加工 |
| 09 | 机械零件的结构工艺性 | 17 | 切削加工 | 铸锻结构、切削加工结构与装配结构工艺性 |
| 10 | 机械加工工艺过程的基础知识 | 63 | 切削加工 | 工序组成、定位与夹紧、工艺尺寸链、工艺规程 |

## 目录结构

```
FundManuf/
├── index.html                 # 章节导航首页
├── viewer.html                # 讲义阅读页（?ch=03 指定章节）
├── chapters.js                # 章节清单（标题、页数、简介、PDF 文件名、CDN 地址）
├── favicon.svg                # 站点图标
├── pdf/                       # 10 个讲义 PDF（中文文件名保持原样）
├── docs/pdfjs/                # 自托管 PDF.js 3.11（legacy 版，含本项目定制）
├── .nojekyll                  # 关闭 GitHub Pages 的 Jekyll 处理
├── .gitignore
└── README.md
```

`chapters.js` 是章节信息的唯一来源：首页卡片、阅读页标题、下拉框、上下讲链接、下载链接都由它生成。更新讲义时只需替换 `pdf/` 下的文件，并同步该文件中的 `pages` 等字段。

## 阅读地址

- 首页：`https://kivinchoa01.github.io/fund-manufacturing/`
- 第 3 讲：`https://kivinchoa01.github.io/fund-manufacturing/viewer.html?ch=03`
- 章节编号即文件名前缀（`01`–`10`），可直接分享单讲链接。

## 本地预览

PDF.js 通过 XHR 读取 PDF，建议用本地 HTTP 服务预览，不要直接双击 `index.html`：

```bash
python -m http.server 8000
# 浏览器打开 http://localhost:8000/
```

## 更新讲义

1. 用新文件覆盖 `pdf/` 下对应 PDF（文件名保持不变最省事）。
2. 若页数或章节标题有变化，同步修改 `chapters.js` 中的 `pages`、`title`、`desc` 等字段。
3. 提交并推送到两个远程仓库：

   ```bash
   git add -A
   git commit -m "更新第 X 讲讲义"
   git push origin master
   git push github master
   ```

4. GitHub Pages 会自动发布；jsDelivr 的 `@master` 缓存最长约 12 小时。需要立即刷新某份 PDF 的 CDN 缓存时访问：

   ```
   https://purge.jsdelivr.net/gh/kivinchoa01/fund-manufacturing@master/pdf/<文件名>
   ```

   如果 CDN 暂时仍是旧版本，阅读页可点“备用线路”直接读取本站文件。

## 部署说明

- 主远程仓库（Gitee）：`git@gitee.com:zhou-jiming/fund-manufacturing.git`
- GitHub 镜像：`git@github01:kivinchoa01/fund-manufacturing.git`（主机别名 `github01`，密钥 `id_ed25519github`）
- 分支：`master`
- GitHub Pages 发布源需设为 **Deploy from a branch → master → / (root)**；根目录的 `.nojekyll` 保证 `docs/` 等目录按静态文件发布。
- 同步推送：

  ```bash
  git push origin master && git push github master
  ```

## PDF.js 定制说明

`docs/pdfjs/` 为 PDF.js 3.11（legacy 版）。为适配本项目，在官方发行版基础上做了以下修改，**升级 PDF.js 时需重新应用**：

1. `web/viewer.js` 的 `validateFileURL` 允许从 `cdn.jsdelivr.net` 加载本仓库的 PDF：

   ```js
   fileURL.pathname.startsWith("/gh/kivinchoa01/fund-manufacturing@")
   ```

2. 演示模式（全屏）下不再把链接注释设为 `inert`：`AnnotationLayerBuilder.#updatePresentationModeState` 跳过 `linkAnnotation`，并在 `web/viewer.css` 中恢复 `section.linkAnnotation` 的 `pointer-events`（`:fullscreen` 与 `:-webkit-full-screen` 分开写，避免 Firefox 丢弃整条选择器）。
3. `externalLinkTarget` 默认值改为 `2`（新标签页）。网页端由 `viewer.html` 拦截讲义内外部链接并改为站内浮层；只有点击浮层“新窗口”才打开独立窗口。
4. `web/viewer.html` 中 `viewer.css` / `viewer.js` 带版本参数（当前 `?v=20261110`），修改后请同步更新，避免浏览器使用旧缓存。

阅读页通过 `docs/pdfjs/web/viewer.html?file=<PDF 地址>&locale=zh-CN#pagemode=none` 调用 PDF.js，其中 `locale=zh-CN` 启用中文界面。

## 版权与使用

本讲义仅用于课程教学。PDF 中的图片、扫描页及其他第三方素材版权归原作者及出版社所有，请勿公开传播或用于商业用途。PDF.js 采用 Apache-2.0 许可，许可证见 `docs/pdfjs/LICENSE`。
