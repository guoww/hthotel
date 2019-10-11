import Taro, { Component, Config } from '@tarojs/taro'
import { AtNavBar,AtButton } from 'taro-ui'
import {Image, View,Text,Picker} from '@tarojs/components'
import './dispkg.scss'
import moment from 'moment'
import {siteroot} from '../api/base'
import room2 from "../../images/ht_env/room2.jpg"

export default class Dispkg extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '优惠套餐',
  }
  constructor () {
    super(...arguments)
    this.state = {
      disPkgList:[]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {

  }

  componentDidHide () { }

  getList(){
    Taro.request({
      url: siteroot+'/app/dispkg/getPage',
      method: 'GET',
      header:{'content-type':'application/json'}
    }).then((res)=>{
      console.log(res)
    })

    moment.locale('zh-cn')
    const now = moment().format("YYYY-MM-DD")

  }
  back(){
    Taro.navigateBack()
  }

  toMember(){
    Taro.navigateTo({
      url:'/pages/center/center'
    })
  }

  toIndex(){
    Taro.navigateTo({
      url:'/pages/index/index'
    })
  }

  render () {
    return (
      <View>
        <AtNavBar
          color='#78A4FA'
          title='优惠套餐'
          leftText='返回'
          leftIconType="chevron-left"
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
          onClickLeftIcon={this.back.bind(this)}
          onClickRgIconNd={this.toMember.bind(this)}
          onClickRgIconSt={this.toIndex.bind(this)}
        />

        <View className="pkg-list">
          <View className="pkg-item">
            <View className="left">
              <Image src={room2} className="pkg-img" mode="aspectFit"/>
            </View>
            <View className="right">
              <View className="pkg-name">国庆玩乐一条龙套餐</View>
              <View className="pkg-in"><Text className="pkg-tag">可叠加优惠券</Text></View>
              <View className="bs-price">
                ¥ 4500
              </View>
              <View >
                <Text className="dis-price">¥ 2999</Text>

              </View>
            </View>
          </View>
        </View>

      </View>

    )
  }
}
