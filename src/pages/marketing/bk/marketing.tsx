import Taro,{Component, Config} from "@tarojs/taro";
import { AtTabs, AtTag, AtTabsPane, AtNavBar, AtButton, AtCountdown } from 'taro-ui'
import { Image, View ,Text } from '@tarojs/components'
import "./marketing.scss"
import room1 from "../../images/ht_env/room1.jpg"
import room2 from "../../images/ht_env/room2.jpg"

export default class Marketing extends Component {
  config: Config = {
    navigationBarTitleText: '瀚庭酒店',
  }
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  goBack() {
    Taro.navigateTo({
      url:'/pages/index/index'
    })
  }

  toOrderForm () {
    Taro.navigateTo({
      url:'/pages/order/submit/submit'
    })
  }

  toOrderSub() {
    Taro.navigateTo({
      url: '/pages/order/submit/submit'
    })
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const tabList = [{ title: '特价房' },{ title: '限时抢购' }]
    return (
      <View>
        <AtNavBar
          color='#78A4FA'
          title='低价活动'
          leftText='返回'
          leftIconType="chevron-left"
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
          onClickLeftIcon={this.goBack}
        />
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className="tj-list">

              <View className="tjf-item">
                <Text className="iconfont iconfont-te"></Text>
                <View className="tj-info">
                  <View className="img-wrapper">
                    <Image src={room1} className="img_view"/>
                  </View>
                  <View className="info-wrapper">
                    <View className="room_name">
                      优雅大屏电影房
                    </View>
                    <View>
                      <AtTag className="mrg_rgt" size='small'>有冰箱</AtTag>
                      <AtTag className="mrg_rgt" size='small'>2米大床</AtTag>
                      <AtTag className="mrg_rgt" size='small'>有窗户</AtTag>
                    </View>
                    <View className="time_tip">
                      2019-8-10 至 2019-8-20
                    </View>
                  </View>
                </View>
                <View className="item_row" style="display:flex;flex-direction:row;margin-top:10px;">
                  <Text style="color:#FF4949;font-size:16px;">
                    ¥308
                  </Text>
                  <Text className="bs_price">¥428</Text>
                  <View className="order-row-right" style="display:flex;flex-direction:row;">
                    <View>
                      <AtButton type='primary' size="small" onClick={this.toOrderSub.bind(this)}>预定</AtButton>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className="qg_list">
              <View className="qg_item">
                <View className="it-header">
                  <View className="qg_name">进行中</View>
                  <View className="qg_time_count">
                    剩余：
                    <AtCountdown
                      format={{ hours: '时', minutes: '分', seconds: '秒' }}
                      minutes={19}
                      seconds={59}
                      isCard={true}
                      className="at_cd"
                      style="font-size:20px;"
                    />
                  </View>
                </View>
                <View className="rmt_list">
                  <View className="rmt_item">
                    <Text className="iconfont iconfont-qg"></Text>
                    <View className="rtm_ele rmt_img_container">
                      <Image src={room2} className="rmt_img"/>
                    </View>
                    <View className=" wd_50 rmt_info_wrapper">
                      <View className="rmt_name">优雅电影大床房</View>
                      <View className="rmt_props">
                        <AtTag className="mrg_rgt" size='small'>有冰箱</AtTag>
                        <AtTag className="mrg_rgt" size='small'>2米大床</AtTag>
                        <AtTag className="mrg_rgt" size='small'>有窗户</AtTag>
                      </View>
                    </View>
                    <View className="wd_20 fx-col">
                      <View className="pric-wrapper">
                        <Text className="qg_currency">¥</Text>
                        <Text className="qg_pric">288</Text>
                        <Text className="bs_pirc">
                          (<Text className="bs_pric_v">¥398</Text>)
                        </Text>
                      </View>
                      <View className="qg_bk_btn">
                        <AtButton
                          className="rm-book-btn"
                          type='primary'
                          size="small"
                          onClick={this.toOrderForm.bind(this)}>
                          预定</AtButton>
                      </View>
                    </View>
                  </View>

                  <View className="rmt_item">
                    <Text className="iconfont iconfont-qg"></Text>
                    <View className="rtm_ele rmt_img_container">
                      <Image src={room2} className="rmt_img"/>
                    </View>
                    <View className=" wd_50 rmt_info_wrapper">
                      <View className="rmt_name">优雅电影大床房</View>
                      <View className="rmt_props">
                        <AtTag className="mrg_rgt" size='small'>有冰箱</AtTag>
                        <AtTag className="mrg_rgt" size='small'>2米大床</AtTag>
                        <AtTag className="mrg_rgt" size='small'>有窗户</AtTag>
                      </View>
                    </View>
                    <View className="wd_20 fx-col">
                      <View className="pric-wrapper">
                        <Text className="qg_currency">¥</Text>
                        <Text className="qg_pric">288</Text>
                        <Text className="bs_pirc">
                          (<Text className="bs_pric_v">¥398</Text>)
                        </Text>
                      </View>
                      <View className="qg_bk_btn">
                        <AtButton
                          className="rm-book-btn"
                          type='primary'
                          size="small"
                          onClick={this.toOrderForm.bind(this)}>
                          预定</AtButton>
                      </View>
                    </View>
                  </View>

                </View>
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>

    )
  }
}
