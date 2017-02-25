import React, { Component } from 'react'

import './senior-form.scss'

export default class SeniorForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      zipcode: '',
      addLearn: '',
      addTeach: '',
      addRequirement: '',
      needToKnow: '',
      lease: '',
      hours: '',
      learnTopics: [],
      teachTopics: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.addLearn = this.addLearn.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  addLearn(e) {
    e.preventDefault()
    let updatedLearnTopics = [...this.state.learnTopics, this.state.addLearn ]
    this.setState({
      learnTopics: updatedLearnTopics,
      addLearn: ''
    })
  }

  createAccount(e){
    e.preventDefault()
    this.setState({
      user: Object.assign({}, this.state)
    })
  }

  render() {
    let { name, zipcode, addLearn, addTeach, addRequirement, needToKnow, lease, hours, learnTopics } = this.state

    let inputLearn = learnTopics.length >= 1 ? learnTopics.map((learn, index) => <p key={index}>{learn}</p>) : ''

    return (
      <form className='senior-form'>
       <h2>Create Your Account</h2>
        <label> NAME </label>
        <input placeholder='Cynthia Aguilar'
               type='text'
               name='name'
               value={name}
               onChange={this.handleInputChange}/>
        <br/>
        <label>ZIPCODE</label>
        <input placeholder='80202'
               value={zipcode}
               type='number'
               name='zipcode'
               onChange={this.handleInputChange}/>
        <br/>
        <button onClick={this.renderNext}>SUBMIT</button>
        <br/>
        <br/>

        <hr />

        <label>I would like to learn about:</label>
        <br/>
        <input type='checkbox'
               name='learnSci'
               onChange={this.handleInputChange}/>Science
        <br/>
        <input type='checkbox'
               name='learnArt'
               onChange={this.handleInputChange}/>Art
        <br/>
        <input type='checkbox'
               name='learnTech'
               onChange={this.handleInputChange}/> Technology
        <br/>
        <input type='checkbox'
               name='learnSports'
               onChange={this.handleInputChange}/> Sports
        <br/>
        <section>{inputLearn}</section>
        <input placeholder='pop culture'
               name='addLearn'
               value={addLearn}
               onChange={this.handleInputChange}/>
        <button name='learnTopics'
                onClick={this.addLearn}
                className='add-like-submit'>
                +
        </button>

        <br/>
        <button onClick={this.renderNext}>SUBMIT</button>
        <hr />
        <br/>
        <label>I would like to teach about:</label>
        <br/>
        <input type='checkbox'
               name='teachSci'
               onChange={this.handleInputChange}/>Science
        <br/>
        <input type='checkbox'
               name='teachArt'
               onChange={this.handleInputChange}/>Art
        <br/>
        <input type='checkbox'
               name='teachTech'
               onChange={this.handleInputChange}/> Technology
        <br/>
        <input type='checkbox'
               name='teachSports'
               onChange={this.handleInputChange}/> Sports
        <br/>
        <input placeholder='music theory'
               name='addTeach'
               value={addTeach}
               onChange={this.handleInputChange}/>
        <button name ='teachTopics'
                onClick={this.addItem}
                className='add-teach-submit'>
                +
        </button>

        <hr />

        <input type='submit' onClick={this.createAccount} value="Create Account"/>
      </form>
    )
  }
}
