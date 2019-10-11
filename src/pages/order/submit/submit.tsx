import Taro, { Component, Config } from '@tarojs/taro'
import { AtButton,AtTabBar, AtNavBar, AtTextarea } from 'taro-ui'
import {Image, View} from '@tarojs/components'
import classNames from 'classnames';
import './detail.scss'
import "taro-ui/dist/style/index.scss"
import room1 from "../../../images/ht_env/room1.jpg"
import room2 from "../../../images/ht_env/room2.jpg"

export default class Detail extends Component {

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
      current: 0,
      tagList:['有小孩','有孕妇','有老人','到店晚','清晨离店','远离电梯','需高楼层','需低楼层'],
      currentTags:[],
      orderInfo:{
        hotel_name: "瀚庭智慧酒店",
        in_date: '8月10日',
        out_date: '8月11日',
        date_num: 1,
        price:428,
        roomType: {
          id: 1,
          name: '雅致大床房',
          roomNum: 1,
          customer: '郭文维',
          phone: '15902071016',
        },
        tags:[],
        counpon:'',
        remark: ''
      }
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
  ifTagActive (index) {
    if(this.getCurTagItem(index)!=-1) return true;
    return false
  }

  getCurTagItem (index) {
    var curTags = this.state.currentTags;
    if(curTags&&curTags.length>0) {
      for(var i = 0;i<curTags.length; i++) {
        if(index == curTags[i]) return i;
      }
    }
    return -1;
  }

  tagClickHandle (e) {
    let index = e.currentTarget.dataset.index;
    console.log(index)
    var curTags = this.state.currentTags;
    console.log(curTags)
    var curIndex = this.getCurTagItem(index)

    if(curIndex!=-1) {
      curTags = curTags.splice(curIndex,1);
    } else {
      curTags.push(index);
    }
    this.setState({
      curruntTags: curTags
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
      <View className="main_bg">
        <AtNavBar
          color='#78A4FA'
          title='订单提交'
          leftText='返回'
          fixed
          leftIconType="chevron-left"
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
        <View className="header wt_bg">
          <View className="ht-name"><text>{this.state.orderInfo.hotel_name}</text></View>
          <View className="time-info">
            <View className="t-info-item">
              <text className="label">入住：</text>
              <text className="txt">{this.state.orderInfo.in_date}</text>
            </View>
            <View className="t-info-item" style="text-align:center;">
              <text className="label">离店：</text>
              <text className="txt">{this.state.orderInfo.out_date}</text>
            </View>
            <View className="t-info-item" style="text-align:right;">
              <text className="label" >共{this.state.orderInfo.date_num}晚</text>
            </View>
          </View>
        </View>


        <View className="roomInfo wt_bg">
          <View class="rm-name">{this.state.orderInfo.roomType.name}</View>
          <View className="rm-prop-item">
            <text className="prop-label">房间数</text>
            <View className="prop-val">
              <text className="rm-num-choose rm-num-active">2</text>
              <text className="rm-num-choose rm-num-nomal">1</text>
            </View>
          </View>
          <View className="rm-prop-item">
            <text className="prop-label">入住人</text>
            <View className="prop-val">
              <input type="text" placeholder="入住人姓名，一间房填一人"/>
            </View>
          </View>
          <View className="rm-prop-item">
            <text className="prop-label">联系电话</text>
            <View className="prop-val">
              <input type="text" value={this.state.orderInfo.roomType.phone}/>
            </View>
          </View>
          <View className="rm-prop-item">
            <text className="prop-label">优惠券</text>
            <View className="prop-val">
              <text>可用优惠券1张</text>
            </View>
          </View>
        </View>


        <View className='remark-info wt_bg'>
          <View className="tag-list">
            {this.state.tagList.map((item,i)=>
              <View
                className={classNames('tag-item',
                  {'tag-item-mrg':(i%4)!=0},
                  {'tag-item-active':this.ifTagActive(i)})}
                  onClick={this.tagClickHandle.bind(this)}
                  data-index={i}>
                {item}</View>
            )}


          </View>

          <View className="remark-area">
            <View className="rk-text">备注</View>
            <AtTextarea
              maxLength={100}
              placeholder='请输入100字以内'
              style="background-color:#f8f8f8"
            />
          </View>
        </View>

        <View className="btn-bar">

          <View className="btm-price">
            <text style="margin-right:5px;">¥</text>
            {this.state.orderInfo.price}
            </View>
          <View className="sub-btn">提交订单</View>
        </View>
      </View>

    )
  }
}
