# css常用
``` css
// 单行超出省略隐藏
.single-line {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

// 两行超出省略隐藏
.two-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```
