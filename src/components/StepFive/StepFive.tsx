import icons from '../../assets/icons.svg';
import './stepfive.css';
import Heading from '../common/Heading'
const StepFive = () => {
  return (
      <section className="form__steps step-five">
          <svg className="icon">
              <use href={icons+"#icon-thank-you"} ></use>
          </svg>
          <Heading 
              headingText="Thank you!"
              descText="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
            />
    </section>
  )
}

export default StepFive