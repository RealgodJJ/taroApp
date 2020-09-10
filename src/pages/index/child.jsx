import React, {Component} from 'react';
import {View, Text} from '@tarojs/components';

export default class Child extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.flag !== nextProps.flag) {
      console.log("===componentWillReceiveProps(Child)===");
      console.log("props属性变化了：" + nextProps.teacher);
    }
  }

  clickView() {
    this.props.ontest();
  }

  render() {
    let {teacher, obj} = this.props;
    return (
      <View onClick={this.clickView.bind(this)}>
        <Text>子节点：{teacher}</Text>
        <br/>
        &nbsp;
        <Text> 名称：{obj.key[0].student} </Text>
        <br/>
        &nbsp;
        <Text> 年龄：{obj.key[0].age} </Text>
      </View>
    );
  }
}

// 设置默认属性的初始值
Child.defaultProps = {
  obj: {key: [{name: "aaa", age: 0}]}
};
