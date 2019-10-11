import Taro, { Component, Config } from '@tarojs/taro'
import { AtButton,AtTabBar } from 'taro-ui'
import {Image, Swiper, SwiperItem , View} from '@tarojs/components'
import './index.scss'
import "taro-ui/dist/style/index.scss"
import room1 from "../../images/ht_env/room1.jpg"
import room2 from "../../images/ht_env/room2.jpg"
import room3 from "../../images/ht_env/room3.jpg"

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '房型选择',
  }
  constructor () {
    super(...arguments)
    addGlobalClass: true
    this.state = {
      isOpened: false
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
      <View>
        <Swiper
          className="header-swp"
          indicatorActiveColor="#333"
          indicatorColor="#999"
          vertical
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image src={room1}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src={room2}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src={room3}></Image>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}
