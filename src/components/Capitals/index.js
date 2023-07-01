import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCountry: countryAndCapitalsList[0].country}

  onClickCapital = event => {
    const countrySelected = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value,
    )
    this.setState({selectedCountry: countrySelected[0].country})
  }

  render() {
    const {selectedCountry} = this.state
    return (
      <div className="bg-container">
        <div className="countries-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-tag-container">
            <select
              className="select-tag"
              onChange={this.onClickCapital}
              value={selectedCountry.id}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="options-capital"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country-name"> {selectedCountry}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
