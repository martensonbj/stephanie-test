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
    this.setState({
      learnTopics: this.state.learnTopics.push(this.state.addLearn),
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
        <label> How long will you consider sharing your home?</label>
        <br/>
        <input type='radio'
               name='lease'
               value='3 months'
               checked={lease === '3 months'}
               onChange={this.handleInputChange}/>3 months
        <input type='radio'
               name='lease'
               value='6 months'
               checked={lease === '6 months'}
               onChange={this.handleInputChange}/>6 months
        <input type='radio'
               name='lease'
               value='9 months'
               checked={lease === '9 months'}
               onChange={this.handleInputChange}/> 9 months
        <input type='radio'
               name='lease'
               value='1 year +'
               checked={lease === '1 year +'}
               onChange={this.handleInputChange}/> 1 year +
        <br/>
        <label>How much time would you like to spend with your tenant each week?</label>
        <br/>
        <input type='radio'
               name='hours'
               value='10-15 hours'
               checked={hours === '10-15 hours'}
               onChange={this.handleInputChange}/>10-15 hours
        <input type='radio'
               name='hours'
               value='15-20 hours'
               checked={hours === '15-20 hours'}
               onChange={this.handleInputChange}/>15-20 hours
        <input type='radio'
               name='hours'
               value='20-25 hours'
               checked={hours === '20-25 hours'}
               onChange={this.handleInputChange}/> 20-25 hours
        <input type='radio'
               name='hours'
               value='25-30 hours'
               checked={hours === '25-30 hours'}
               onChange={this.handleInputChange}/> 25-30 hours
        <br/>
        <button onClick={this.renderNext}>SUBMIT</button>
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
        <br/>
        <button onClick={this.renderNext}>SUBMIT</button>
        <br/>
        <label>Do you have specific requirements for tenants:</label>
        <br/>
        <input type='checkbox'
               name='noSleepovers'
               onChange={this.handleInputChange}/>No overnight guests
        <br/>
        <input type='checkbox'
               name='noSmoking'
               onChange={this.handleInputChange}/>No smoking
        <br/>
        <input type='checkbox'
               name='yesClean'
               onChange={this.handleInputChange}/> Keep Common Areas Clean
        <br/>
        <input placeholder='no pets'
               name='addRequirement'
               value={addRequirement}
               onChange={this.handleInputChange}/>
        <button onClick={this.addItem}
                className='add-requirements-submit'>
                +
       </button>
        <br/>
        <button onClick={this.renderNext}>SUBMIT</button>
        <br/>
        <label>Is there anything else you want tenants to know about you or your home?</label>
        <br/>
        <textarea className='needToKnow'
                  name='needToKnow'
                  value={needToKnow}
                  onChange={this.handleInputChange}
                  placeholder='I have 2 dogs and a cat.   Dirty dishes and punk rock are pet peeves.  Other than that I’m easy- going and open-minded.  I have a small unfurnished guest room available.'>
        </textarea>
        <br/>
        <input type='submit' onClick={this.createAccount}/>
      </form>
    )
  }
}
