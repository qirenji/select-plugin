# 城市选择器(三级联动)

## 介绍
一个中国地区的三级联动数据，也可以自定义数据。

## 使用

### 默认数据

引入js文件。

在html文件中插入

```
// html中添加
<div class="container"></div>

<script src="dist/all.js"></script>
<script>

    let selector = new Select('.container',default_data);

</script>
```
默认就可以生成中国地区的三级联动数据啦
### 自定义数据
```
//html中添加
<div class="container1"></div>

<script src="dist/all.js"></script>
<script>
    const text = ['选项1','选项二','选项三']
		//自定义数据
    const data = {
       'province': ['a1', 'a2', 'a3'],
        'city': [
                  ['a11', 'a12', 'a13'],
                  ['a21', 'a22'],
                  ['a31', 'a32']
                ],
        'county':  [
                  [['a111', 'a112'], ['a121', 'a122'], ['a131', 'a132']],
                  [['a211', 'a212'], ['a221', 'a222']],
                  [['a311'], ['a312']]
                ]
              };
	let selector1 = new Select('.container1',data, text)
</script>Select('.container', data, text);
```
- 第一个参数是插件所在的父容器
- 第二个参数是插件所要选择的数据（json形式）
- 第三个参数是选择器前面的提示词语

## 效果图
![城市选择器插件](http://www.qirenji.info//img/select-plugin/city.png)

![自定义数据选择](http://www.qirenji.info//img/select-plugin/custom.png)


## About
关于我: http://www.qirenji.info/about

GitHub: https://github.com/qirenji/

E-mail: lyf@qirenji.com
