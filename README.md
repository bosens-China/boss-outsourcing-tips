# boss-outsourcing-tips

程序员界一直流传各种对外包的歧视，但是很多外包公司在投递简历的时候还需要自己来手动筛选过于麻烦，就有了这个小工具。

![tips1](./tips1.png)
![tips2](./tips2.png)

> 使用需要结合油猴插件使用

## 使用方式

- 方法一：[点击安装](https://greasyfork.org/zh-CN/scripts/478865-boss%E5%A4%96%E5%8C%85%E5%85%AC%E5%8F%B8%E6%8F%90%E7%A4%BA)

- 方法二：拷贝右边 Releases 自行添加到油猴中

- 方法三：

```sh
git clone 当前项目
pnpm install
pnpm run build
# 重复方法一
```

## 判定规则

采用黑名单 + 关键词的机制，如果公司名称出现在黑名单上则直接判定为黑名单，否则关键词出现一次，进行提示，出现两次则认定。

参考规则：

- https://www.zhihu.com/question/32123407
- https://zhuanlan.zhihu.com/p/407777028
- https://www.zvsts.com/article/news/1/4e347ffffe83fd932bcbbf4efafb0000.html

> 如果你有好的个规则补充，可以修改 [information.json](./src/information.json) 文件进行 PR，后续审核通过就会发版。

## 协议

MIT License
