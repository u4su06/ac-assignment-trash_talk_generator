# 幹話產生器
- 這個專案可以分別對三種職業產生幹話
- 採用 Node.js 和 Express 打造

## 功能描述 (features)
- 可在工程師、設計師、或創業家中選擇一個對象
- 按下擴音器按鈕，就會產生一句對應的幹話

## 環境建置(prerequisites)

### global packages
- Node.js v10.15.0
- nodemon v2.0.6
- npm v6.4.1

### local packages
- 可於專案的 `package.json` 中查閱 `dependencies` 部分。

## 安裝與執行步驟 (installation and execution)
- 以下動作需使用 terminal 或 Git Bash 指令
1. 將專案clone到本地環境
```
git clone https://github.com/u4su06/ac-assignment-trash_talk_generator.git
```
2. 進入專案資料夾
```
cd trash_talk_generator
```
3. 至 package.json 檔案裝查看需安裝的npm套件，並搭配以下指令安裝
```
npm install
```
4. 啟動伺服器，執行專案
```
npm run dev
```
5. 打開瀏覽器，在網址列輸入
```
localhost:3000
```