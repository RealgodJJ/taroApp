import React, {Component} from 'react';
import {View, Text, Button, Image} from '@tarojs/components';
import {getCurrentInstance} from '@tarojs/taro';
import './index.less';
import Child from './child';
import Img from '../../img/main_kv@2x.png';
import {f1, f2} from '../../utils';

export default class Index extends Component {
  constructor(props) {
    super(props);
    // this.setState(name:"Hello world!!！");
    this.state = {
      name: 'Hello world!!!!!',
      teacher: '张三',
      obj: {key: [{student: "", age: 0}]}
    };
  }

  componentWillMount() {
    console.log("===componentWillMount===");
    let {id, type} = getCurrentInstance().router.params;
    alert(id + "-" + type);
  }

  componentDidMount() {
    console.log("===componentDidMount===");
    this.setState({name: 'Hello China!!!!!', teacher: '李四', obj: {key: [{student: "张三", age: 25}]}},
      () => {
        console.log("state管理异步更新：" + this.state.name + "\n" + this.state.teacher + "\n" +
          this.state.obj.key[0].student + "\n" + this.state.obj.key[0].age);
      });
    console.log("state管理还未更新：" + this.state.name + "\n" + this.state.teacher + "\n" + this.state.obj.key[0].student
      + "\n" + this.state.obj.key[0].age);
  }

  // eslint-disable-next-line react/sort-comp
  shouldComponentUpdate(nextProps, nextState) {
    //检查此次setState是否要进行render调用
    //一般用来多次的setState调用时，提升render性能（减少频繁刷新）
    console.log("===shouldComponentUpdate===");
    return nextState.teacher === '李四';
  }

  // eslint-disable-next-line no-unused-vars
  componentWillReceiveProps(nextProps) {
    //会在父组件传递给子组件的参数发生改变时触发
  }

  componentWillUnmount() {
    console.log("===componentWillUnmount===");
  }

  componentDidShow() {
    //在React中不存在的函数，Taro特有函数，页面显示时触发
  }

  componentDidHide() {
    //在React中不存在的函数，Taro特有函数，页面隐藏时触发
  }

  testHandle() {
    console.log("test父组件传递参数给子组件......");
  }

  clickF1Handle() {
    f1();
  }

  clickF2Handle() {
    f2();
  }

  render() {
    let {teacher, obj} = this.state;
    // let obj = {key: [{name: '张三', age: 18}]};
    return (
      <View className='imgStyle'>
        <Image src={Img}/>
        <Text>{this.state.name}</Text>
        <View>
          <Text>{this.state.teacher}</Text>
          <Child teacher={teacher} obj={obj} ontest={this.testHandle}/>
          <Button onClick={this.clickF1Handle.bind(this)}>调用功能1</Button>
          <Button onClick={this.clickF2Handle.bind(this)}>调用功能2</Button>
        </View>
      </View>
    );
  }
}
