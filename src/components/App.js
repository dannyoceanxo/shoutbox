import React, { Component } from 'react'
import _ from 'lodash'
import db from '../db'

class App extends Component {
  state = {
    items: {},
    username: null
  }

  componentDidMount () {
    db.ref('items').on('value', (snapshot) => {
      this.setState({
        items: snapshot.val()
      })
    })
  }

  addItem (text) {
    db.ref('items').push().set({ text, username: this.state.username })
  }

  _submit = (event) => {
    event.preventDefault()
    const input = this.refs.chatText
    this.addItem(input.value)
    input.value = ''
  }

  signIn = (event) => {
    event.preventDefault()
    const input = this.refs.username
    this.setState({ username: input.value })
    input.value = ''
  }

  render () {
    if (this.state.username) {
      return <div className='App'>
        <h1>Shout Box</h1>
        <div className='chatContainer'>
          <div className='mainContainer'>
            {_.map(this.state.items, ({ username, text }, key) =>
              <p className='chatText' key={key}>{username}: {text}</p>
            )}
          </div>
        </div>
        <div className='inputContainer'>
          <form onSubmit={this._submit}>
            <input className='inputBox' ref='chatText' />
          </form>
        </div>
      </div>
    } else {
      return <div className='App'>
        <h1>Shout Box</h1>
        <form onSubmit={this.signIn}>
          <p>Who you is, what yo name?</p>
          <input className='inputBox' ref='username' />
        </form>
      </div>
    }
  }
}

export default App
