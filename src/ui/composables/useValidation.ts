export const useValidation = () => {
  const validate = (form: Record<string, any>, rules: Record<string, any>)=>{
    const errors = {}

    Object.entries(form).forEach(([key, value])=>{
      if(rules[key]){
        const rule = rules[key].regex

        if(!rule.test(value)){
          errors[key] = rules[key].error
        }
      }
    })

    if(Object.keys(errors).length > 0){
      return ({validated: false, errors})
    }

    return ({validated: true, errors})
  }

  const isRequiredString = () => ({ regex: /^[^\s]+$/, error: 'This field is required.' })
  const isRequiredNumber = () => ({ regex: /^-?\d+(\.\d+)?$/, error: 'This field is required.' })
  const isRequiredEmail = () => ({ regex: /^[^\s@]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, error: 'Please enter a valid email.' })

  return{
    validate,
    isRequiredEmail,
    isRequiredNumber,
    isRequiredString
  }
}
