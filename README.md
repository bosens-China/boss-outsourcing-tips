# boss-outsourcing-tips

程序员界一直流传各种对外包的歧视，但是很多外包公司在投递简历的时候还需要自己来手动筛选过于麻烦，就有了这个小工具。

![tips1](./tips1.png)
![tips2](./tips2.png)

> 如果你对它的判定规则好奇，你可以 [点击查看具体规则](./JudgmentConditions.md)。
> 如果你有好的个规则补充，可以修改 [information.json](./src/information.json) 文件进行 PR，后续审核通过就会发版。
> 使用需要结合油猴插件使用

## 使用方式

目前因为账号限制，无法在 https://greasyfork.org/zh-CN 发布，所以只能手动拷贝使用。

```sh
# 方法一，直接拷贝dist/index.js 文件
# 方法二
git clone 当前项目
pnpm install
pnpm run build
# 重复方法一
```

## 协议

MIT License
