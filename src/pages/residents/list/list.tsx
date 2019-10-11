import {Component, Config} from "@tarojs/taro";
import { AtNavBar } from 'taro-ui'
import { View } from '@tarojs/components'
import "./residents.scss"
import "taro-ui/dist/style/index.scss"

export default class residents extends Component {
  config: Config = {
    navigationBarTitleText: '瀚庭酒店',
  }
  constructor () {
    super(...arguments)
    addGlobalClass: true
    this.state = {
      current: 2
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {

    return (
      <View>
        <AtNavBar
          color='#78A4FA'
          title='入住人'
          leftText='返回'
          fixed
          leftIconType="chevron-left"
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
        <View className="add-btn">添加入住人</View>

        <View className="rd-list">
          <View className="rd-item">
            <text>郭文维</text>
            <text>15902071016</text>
          </View>
        </View>
      </View>

    )
  }
}
