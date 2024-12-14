import Heading from "../common/Heading"
import Input from "../common/Input"
import './stepone.css'
const StepOne = ({ onInputChange,formData,formErrors}: {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  formErrors: {
    name: string,
    email: string,
    phone: string,
  },
  formData: {
    name: string,
    email: string,
    phone: string,
    formPlan: string,
    billingPlanYearly: boolean,
    onlineservice: boolean,
    largerstorage: boolean,
    customizableprofile: boolean,

  }
}) => {

  return (

      <section className="form__steps">
      <Heading descText="Please provide your name , email address, and phone number" headingText="Personal Info" />
      <div className="form__step-one--container">
        <Input
          inputType="text"
          placeholderText="e.g. Stephan King"
          labelText="Name"
          errorMessage={formErrors.name}
          inputValue={formData.name}
          onInputChange={onInputChange}
          name="name"
        />
        <Input
          name="email"
          inputType="text"
          placeholderText="e.g. stephanking@lorem.com"
          labelText="Email Address"
          errorMessage={formErrors.email}
          inputValue={formData.email}
          onInputChange={onInputChange}
        />
        <Input 
          inputType="text"
          placeholderText="e.g. +1234567890"
          labelText="Phone Number"
          errorMessage={formErrors.phone}
          inputValue={formData.phone}
          onInputChange={onInputChange}
          name='phone'
        />
      </div>
      </section>

  )
}

export default StepOne;