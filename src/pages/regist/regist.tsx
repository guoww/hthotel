import Taro, { Component, Config } from '@tarojs/taro'
import { AtButton,AtForm,AtInput,AtNavBar } from 'taro-ui'
import {View} from '@tarojs/components'
import './login.scss'
import {siteroot} from '../api/base'
import fetch from '../../utils/request'

export default class Index extends Component {


  config: Config = {
    navigationBarTitleText: '瀚庭酒店',
  }
  constructor () {
    super(...arguments)
    this.state = {
      phone:'',
      code:'',
      name:'',
      idCard: '',
      getCodeBtnTxt:'获取验证码',
      sending:false,
      count: 60
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {


  }

  componentDidHide () { }

  phoneChange (e) {
    console.log(e)
    this.setState({
      phone: e
    })
    return e
  }
  nameChange (e) {
    console.log(e)
    this.setState({
      name: e
    })
    return e
  }
  idCardChange (e) {
    console.log(e)
    this.setState({
      idCard: e
    })
    return e
  }
  codeChange (e) {
    console.log(e)
    this.setState({
      code: e
    })
    return e
  }
  handleClick () {

  }
  goBack() {
    Taro.navigateBack()
  }

  getCode() {
    this.setState({
      sending: true
    })

    let count = this.state.count
    const timer = setInterval(() => {
      this.setState({ count: (count--), liked: false }, () => {
        if (count === 0) {
          clearInterval(timer);
          this.setState({
            sending: false ,
            count: 60
          })
        }
      });
    }, 1000);

    console.log(this.state.phone)
    /*fetch({url:'http://localhost:8002/htsys/app/sms/sendLoginCode',
      showToast:true,
      autoLogin:false,
      playload:{phone:this.state.phone}
    }).then((res)=>{
      console.log(res)
    })*/

    Taro.request({
      url: 'http://localhost:8002/htsys/app/sms/sendLoginCode',
      method: 'GET',
      data:{"phone":this.state.phone},
      header:{'content-type':'application/json'}
    }).then((res)=>{
      console.log(res)
    })
  }

  doLogin() {
    Taro.request({
      url:'http://localhost:8002/htsys/app/sms/checkValidCode',
      method: 'GET',
      data:{"phone":this.state.phone,"code":this.state.code},
      header:{'content-type':'application/json'}
    }).then((res)=>{
      console.log(res)
      if(res.data.code=='success') {
        Taro.request({
          url:'http://localhost:8002/htsys/app/login',
          method: 'POST',
          data:{"phone":this.state.phone},
          header:{'content-type':'application/json'}
        }).then((res)=>{
          console.log(res)
        })
      } else {
        Taro.showToast({
          title:'验证码错误'
        })
      }
    })
  }

  render () {
    return (
      <View className="index-container">
        <AtNavBar
          color='#78A4FA'
          title='会员登陆'
          leftText='返回'
          leftIconType="chevron-left"
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
          onClickLeftIcon={this.goBack}
        />
        <AtForm>
          <AtInput
            name='name'
            title='姓名'
            type='text'
            placeholder='姓名'
            value={this.state.name}
            onChange={this.nameChange.bind(this)}
          />
          <AtInput
            name='idCard'
            title='身份证号'
            type='number'
            placeholder='身份证号'
            value={this.state.idCard}
            onChange={this.idCardChange.bind(this)}
          />

          <AtInput
            name='phone'
            title='手机号码'
            type='phone'
            placeholder='手机号码'
            value={this.state.phone}
            onChange={this.phoneChange.bind(this)}
          />
          <AtInput
            name='code'
            title='验证码'
            type='number'
            placeholder='验证码'
            value={this.state.code}
            onChange={this.codeChange.bind(this)}>

            <View onClick={this.getCode.bind(this)}>
              {
                this.state.sending ?
                  <span className="count_second">{this.state.count + 's后重试'}</span>
                  :

                  <span>获取验证码</span>
              }
              </View>

          </AtInput>

        </AtForm>
        <View style="padding:10px">
          <AtButton type="primary" onClick={this.doLogin.bind(this)}>立即登陆</AtButton>
        </View>
      </View>

    )
  }
}
