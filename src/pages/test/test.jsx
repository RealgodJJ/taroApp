import React, {Component} from 'react';
import Taro from '@tarojs/taro';
import {View, Button} from '@tarojs/components';
import './test.less';

export default class Test extends Component {
  clickHandle() {
    Taro.navigateTo({url: '/pages/index/index?id=2&type=test'}); //跳转到该页面
    // Taro.redirectTo({url: '/pages/index/index?send=313'}); //直接替换当前页面
  }

  render() {
    return (
      <View className='test'>
        <Button onClick={this.clickHandle.bind(this)}>跳转</Button>
      </View>
    );
  }
}
