import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isTrue: true}

  onToggleIcon = () => {
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }

  render() {
    const {faqsListDetails} = this.props
    const {questionText, answerText} = faqsListDetails
    const {isTrue} = this.state

    const getAnswerText = () => (
      <div className="answer-container">
        <hr className="hr-line" />
        <p className="answerText">{answerText}</p>
      </div>
    )

    const iconUrl = isTrue
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const altText = isTrue ? 'plus' : 'minus'

    return (
      <li className="li-container">
        <div className="faq-container">
          <div className="question-container">
            <h1 className="question-text">{questionText}</h1>
            <button
              type="button"
              className="plus-button"
              onClick={this.onToggleIcon}
            >
              <img src={iconUrl} alt={altText} className="icon" />
            </button>
          </div>
          {!isTrue ? getAnswerText() : ''}
        </div>
      </li>
    )
  }
}
export default FaqItem
