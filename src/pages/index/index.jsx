import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props);
    // this.setState(name:"Hello world!!！");
    this.state = {
      name: 'Hello world!!!!!',
      text: '张三'
    }
  }

  componentWillMount() {
    console.log("===componentWillMount===");
  }

  componentDidMount() {
    console.log("===componentDidMount===");
    this.setState({name: 'Hello China!!!!!'});
    this.setState({text: '李四'}, () => {
      console.log("state管理异步更新：" + this.state.name + "\n" + this.state.text);
    });
    console.log(this.state.name + "\n" + this.state.text);
  }

  // eslint-disable-next-line react/sort-comp
  shouldComponentUpdate(nextProps, nextState) {
    //检查此次setState是否要进行render调用
    //一般用来多次的setState调用时，提升render性能（减少频繁刷新）
    console.log("===shouldComponentUpdate===");
    return nextState.text === '李四';
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

  render() {
    return (
      <View className='index'>
        <Text>{this.state.name}</Text>
        <View>
          <Text>{this.state.text}</Text>
        </View>
      </View>
    )
  }
}
