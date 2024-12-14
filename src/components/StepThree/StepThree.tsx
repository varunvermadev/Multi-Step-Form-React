import Heading from "../common/Heading"
import { mockedDataAddon } from "../../constant"
import Addon from "../common/Addon"
import './stepthree.css';
const StepThree = ({ onInputChange ,onlineservice,largerstorage,customizableprofile,billingPlanYearly}: {
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,

        onlineservice: (boolean),
        largerstorage: (boolean),
    customizableprofile: (boolean),
        billingPlanYearly: boolean,
}) => {

    const addons = mockedDataAddon.map(addon => {

       
        return (
                <Addon
                    key={addon.addOnName}
                    addonDesc={addon.addOnDesc}
                    addonName={addon.addOnName}
                    addonPrice={addon.addOnPrice}
                onInputChange={onInputChange}
                customizableprofile={customizableprofile}
                largerstorage={largerstorage}
                onlineservice={onlineservice}
                billingPlanYearly={billingPlanYearly}
                />
        )

        
    })

  return (
      <section className="form__steps">
          <Heading 
              headingText="Pick add-ons"
              descText="Add ons help enhance you gaming experience"
          />

          <ul className="form__addons">
              {addons}
          </ul>

    </section>
  )
}

export default StepThree