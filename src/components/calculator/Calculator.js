import React, {Component} from 'react'
import Screen from '../Screen/Screen'
import Key from '../Key/Key'
import './Calculator.css'

export default class Calculator extends Component {

  constructor (props) {
    super(props)

    this.state = {
      value: '0'
    }
  }
  onkeyPress (keyValue) {
    const current = this.state.value
    const finalValue = current === '0' ? keyValue : this.state.value + keyValue

    this.setState({value: finalValue})
  }

  calculate () {
    const result = eval(this.state.value)
    this.setState({value: result})
  }

  init () {
    let ce = '0'
    this.setState({value: ce})
  }

  render () {
    return (
      <div className='calculator'>
        <div className='pantalla'>
          <Screen value={this.state.value} />
        </div>
        <div className='key-row'>
          <Key value='1' onPress={(key) => this.onkeyPress(key)} />
          <Key value='2' onPress={(key) => this.onkeyPress(key)} />
          <Key value='3' onPress={(key) => this.onkeyPress(key)} />
        </div>

        <div className='key-row'>
          <Key value='4' onPress={(key) => this.onkeyPress(key)} />
          <Key value='5' onPress={(key) => this.onkeyPress(key)} />
          <Key value='6' onPress={(key) => this.onkeyPress(key)} />
        </div>

        <div className='key-row'>
          <Key value='7' onPress={(key) => this.onkeyPress(key)} />
          <Key value='8' onPress={(key) => this.onkeyPress(key)} />
          <Key value='9' onPress={(key) => this.onkeyPress(key)} />
        </div>

        <div className='key-row'>
          <Key value='0' onPress={(key) => this.onkeyPress(key)} />
          <Key value='+' onPress={(key) => this.onkeyPress(key)} />
          <Key value='-' onPress={(key) => this.onkeyPress(key)} />
        </div>

        <div className='key-row'>
          <Key value='*' onPress={(key) => this.onkeyPress(key)} />
          <Key value='/' onPress={(key) => this.onkeyPress(key)} />
          <Key value='=' onPress={(key) => this.calculate(key)} />
        </div>

        <Key value='CE' onPress={(key) => this.init(key)} />
      </div>

    )
  }
}
