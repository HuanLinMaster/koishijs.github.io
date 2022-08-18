---
sidebarDepth: 2
---

# 输出日志 (Logger)
Koishi中使用了一套日志系统,开发者可使用koishi中导出的Logger类来输出日志
## 新建日志对象
```
new Logger(name)
```
## 设置日志等
```
logger.level = "error|success|warn|info|debug"
```
## logger.extend()

## 输出错误等级日志
```
logger.error(content)
```
## 输出成功日志
```
logger.success(content)
```

## 输出警告等级日志
```
logger.warn(content)
```
## 输出信息等级日志
```
logger.info(content)
```

## 输出调试配置
```
logger.debug(content)
```
## 例子
```
import { Logger } from 'koishi'
const log = new Logger("demo")
Logger.level = "debug"
Logger.error("一个错误日志")
Logger.success("一个成功日志")
Logger.warn("一个警告日志")
Logger.info("一个信息日志")
Logger.debug("一个调试日志")
```
