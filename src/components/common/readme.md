这一页是公共组件
==============
## actioninfo
这个组件是展示活动/黄页/互联互助页面的详情,接受一个info作为参数,info是一个json包含了type,list,type作为选择的条件,list为数据,actioninfo用在detail页,组件内按条件渲染。info格式如下:
```javascript
   info:{
     type:'action',
     list:[
       {
         name:'',
         age:'',
         sex:''
       }
     ]
   }
```   
## bottom
组件封装了分页和底部功能按钮,内部按条件渲染,但是你需要传参数type,toal,data
```javascript
  <bottom type="pagination" total="10" />
```
当type为分页组件,我们需要传入type为'pagination' total就作为组件的总数保存下来,渲染。
```javascript
  <bottom type="btn" :data="data" />
  data:{
    id:1
  }
```
当type为底部功能按钮时,我们需要操作的是通过还是不通过操作,需要操作对象的ID，所以我们可以通过data对象传入数据。

### handleCurrentChange方法
  当我们需要分页时,就需要这个方法了,他会上传一个方法 getCurrentPage,参数为点击的页码
  ```javascript
    handleCurrentChange(e){
      this.$emit('getCurrentPage',e)
    }
  ```
### handleClickPassOrNo方法
  封装了点击Pass/unpass方法,通过路由地址或者是路由别名作为判断条件,发起http请求。
  + 点击通过
    + 这个http请求需要传入的data作为参数
  + 点击不通过
    + 会唤醒dialog框,我们需要提交一下状态Commit去改变state中的isShowDialog,传入参数title作为dialog框的标题,status作为唤醒dialog框的判断条件,恒为true,type作为dialog组件中选择渲染表单的条件,id作为编辑操作时的参数保存下来。
  + 更多请移步到dialog组件

## button
 作为批量操作的按钮展示在视图。需要两个参数type,chooseArr
 ```javascript
  info:{
    type:'action',
    chooseArr:[1,2,3]
  }
 ```
 type作为选择按钮的条件,传入action时渲染action中的按钮,chooseArr作为删除操作的参数保存下来。当然choooseArr类型最好是数组。
### btnList 
作为计算渲染按钮的属性保存下来
### handleClickDel
单击批量删除操作,我们需要用到父组件传递下来的chooseArr对象,根据路由地址,发起相应的http请求,删除成功之后,会上传一个事件,用于父组件刷新视图。
```javascript
  this.$emit('getDelAnyMsg',true)
```
### handleClickCancel
单击取消操作,我们需要上传一个事件用于刷新父组件
```javascript
  this.$emit('handleCancel',true)
```

## dialog
组件封装了所有的对话框表单提交,接受三个参数title,作为dialog的标题渲染在视图,isShowDialog作为渲染dialog条件,id作为编辑操作参数保存下来。

### computed -- form
我们所有的表单都放在../vuex/modules/form.js中,我们通过cimmit提交的formtype来选择对应的渲染表单。例如:
```javascript
  let form = {}
  if(this.$store.state.formType === 'action'){
    form = this.$store.state.form.addAction
  }
```
我们将return的form作为参数,去循环el-form-item,条件渲染各种组件

### dialogClose
关闭对话框事件。我们会上传一个事件用于改变状态 
```javascript
  this.$emit('dialogClose',true)'
```

### handleAvatarSuccess
既然是表单,我们或许会需要上传图片,我们封装了一个方法来上传头像

### handleClickSubmit
表单的提交事件,我们通过路由地址去发起相应的http请求
请求成功之后会提交一个事件,用以改变父组件的视图,dialog组件的父组件是主路由,所以我们需要上传一个事件给主路由,由主路由去改变。
```javascript
  this.$emit('getSubMsg',true);
```
### hideDialog
当我们的请求成功之后,我们需要关闭对话框,所以封装一个方法调用,我们需要commit一下，以改变vuex中的formType,以便于重复使用。
我们还需要清空验证的表单。
我们还需要改变vuex中的submitState属性,应为他控制着父组件是否刷新视图,所以我们需要上传一个事件去改变
```javascript
  this.$store.commit('changeRefresh',{state:'false'})
```

## header
组件封装了两个方法,用以修改密码和退出登陆

## itemList
我们将所有的列表全部抽取到itemList组件,调用时传入四个参数list作为循环的对象传入,希望list为数组,type作为渲染批量操作的渲染条件传入,我们希望是'action',isShow做为渲染批量操作按钮的条件使用,check是一个无用值,已废弃。

### jumpToEdit
方法根据路由地址判断,跳转到相应模块的编辑页面

### getDelAnyMsg
接受来自于button组件的删除信号,向上接续上传事件给父组件 'getDelAnyMsg',当然上传时需要一个参数true

### cancel
单击取消事件,会向上上传一个事件 'changeIsShow',用于隐藏button组件,当然我们需要一个参数false,还需要将所有的选项还原为false

### handleClickChoose
选择操作对象

### handleClickDel
单击删除事件,根据路由地址判断,发起相应的http请求,请求成功之后会发起一个事件'getDelMsg',
用于父组件刷新视图,当然需要传入一个参数true

## leftmenu
左导航组件。

### handleClick
用于单击跳转,路由地址在菜单中填写。

## search
我们将所有页面的头部全部抽取出来。需要两个参数type作为选择条件保存下来,school用于路由地址相同时,第二种判断条件。我们的判断条件为路由地址。

### otherImport
批量导入事件

### export2excel
导出为excel表格事件

### pageback
返回上一页事件

### handleClickPick
批量操作事件,该事件会上传一个事件给父组件 'PickAny' 用于改变button组件,当然需要一个参数 true

## subnav
副导航组件。做为左菜单的扩展,需要一个参数subList,我们希望他是一个数组。

### jump2other
跳转到相应页面

## table
我们将所有的表格抽取到table组件。需要两个参数info作为渲染的对象,type作为渲染的条件,我们将重新计算的subList对象作为最后的循环对象,subList对象中的prop即为请求回来的数据的字段名,name为表格标题。

### handleClickRow
点击表格一行跳转

### colorPickerChange
表格中的色彩选择器的提交事件,我们是根据路由地址,来发起相应的请求.

### handleClickDel
单击删除事件,我们通过传入的type作为选择条件,发起相应的请求,在请求成功之后我们上传一个事件'getDelMsg'用于父组件刷新视图 , 当然需要一个参数 true

### handleClickEdit
单击编辑事件,我们需要唤醒dialog对话框.由于是编辑事件,我们特意选择了saveValue方法去渲染视图,而不是changeShowDialog事件去渲染.当然我们需要传一些参数.title作为dialog的标题保存下去,status作为唤醒dialog的参数,name作为最后选择表单的必要条件保存下去,value作为渲染在视图的数据保存下来,type作为选择表单的必要条件保存下来,action即为'edit',id作为发起编辑请求的必要参数保存下来.

### handleClickShowMsg
单击查看备注事件

