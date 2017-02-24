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
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    let { name, zipcode, addLearn, addTeach, addRequirement, needToKnow, lease, hours } = this.state
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
        <input type='submit'/>
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
        <input type='submit'/>
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
        <input placeholder='pop culture'
               name='addLearn'
               value={addLearn}
               onChange={this.handleInputChange}/>
        <input type='submit' className='add-like-submit'/>
        <br/>
        <input type='submit'/>
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
        <input type='submit'
               className='add-teach-submit'/>
        <br/>
        <input type='submit'/>
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
        <input type='submit'
               className='add-requirements-submit'/>
        <br/>
        <input type='submit'/>
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
        <input type='submit'/>
      </form>
    )
  }
}
