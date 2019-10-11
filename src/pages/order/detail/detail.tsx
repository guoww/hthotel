import Taro, { Component, Config } from '@tarojs/taro'
import { AtButton,AtTabBar } from 'taro-ui'
import {Image, View} from '@tarojs/components'
import './order.scss'
import "taro-ui/dist/style/index.scss"
import room1 from "../../images/ht_env/room1.jpg"
import room2 from "../../images/ht_env/room2.jpg"

export default class Order extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '瀚庭酒店',
  }
  constructor () {
    super(...arguments)
    addGlobalClass: true
    this.state = {
      isOpened: false,
      current: 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange () {
    this.setState({
      isOpened: true
    })
  }
  toRoomChoose = e => {
    Taro.navigateTo({
       url: `/pages/room/room`
      //url: `/pages/${id.toLowerCase()}/index`
    })
  }
  handleClick (val) {
    this.setState({
      current: val
    })
  }
  onClose () {
    this.setState({
      isOpened: false
    })
  }

  render () {
    return (
      <div className="container">

        <div className='ht_header'>

        </div>
        <div class="chek_in_time">
          <div class="if_form">
            <div class="form-item">
                <block className="iconfont icon-riqi tlt-icon-size time_icom_clr"></block>
                <text className="date_lf">
                  入住日期
                </text>
                <text className="date_rt">入住时间</text>
            </div>
            <div class="form-item">
                <input type="text" className="date_lf" value="2019-08-09，星期四"/>
                <input type="text" className="date_rt" value="共2晚"/>
            </div>
            <div className="form-item">
                <block className="iconfont icon-renyuan tlt-icon-size time_icom_clr"></block>
                <text className="date_lf">
                  宾客及房间总数
                </text>
            </div>
            <div className="form-item">
                <input type="text" className="date_wt100" value="2019-08-09，星期四"/>
            </div>
          </div>

          <div className="btn-wrapper">
            <AtButton
              type='primary'
              className="primary-btn-add"
              size="normal"
              onClick={this.toRoomChoose}>
              立即预定</AtButton>
          </div>
        </div>
        <View className="tj-txt">
          <text>五星推荐</text>
        </View>
        <View className="tj-wrapper">
          <View className="tj-item">
            <text className="tj-tag">特价房</text>
            <Image src={room1} className="tj-img"/>
          </View>
          <View className="tj-item tj-mrg-left">
            <text className="tj-tag">限时抢购</text>
            <Image src={room2} className="tj-img"/>
          </View>
        </View>
        <View className="tj-wrapper" style="height:200px;">
          <View className="tj-item">
            <text className="tj-tag">特价房</text>
            <Image src={room1} className="tj-img"/>
          </View>
          <View className="tj-item tj-mrg-left">
            <text className="tj-tag">限时抢购</text>
            <Image src={room2} className="tj-img"/>
          </View>
        </View>
        <AtTabBar
          fixed
          iconSize="20"
          fontSize="14"
          tabList={[
            { title: '首页', iconType: 'bullet-list' },
            { title: '订单',iconPrefixClass: 'iconfont', iconType: 'jiangbei' },
            { title: '我的',iconPrefixClass: 'iconfont', iconType: 'wode' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </div>

    )
  }
}
