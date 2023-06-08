import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faqs-list-container">
          <h1 className="faq-heading">FAQs</h1>
          {faqsList.map(eachFaq => (
            <FaqItem
              faqsListDetails={eachFaq}
              onToggleIcon={this.onToggleIcon}
              key={eachFaq.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default Faqs
