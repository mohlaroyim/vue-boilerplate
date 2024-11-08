import {some, isEmpty, matches} from 'lodash'

export const useValidation = () => {
  const validate = (form: Record<string, any>, rules: Record<string, any>)=>{
    const errors = {}

    Object.entries(form).forEach(([key, value])=>{
      console.log(key,value)
      if(rules[key]){
        if(!value.match(rules[key].regex)){
          errors[key] = rules[key].error
        }
      }
    })

    if(Object.keys(errors).length > 0){
      return ({validated: false, errors})
    }

    return ({validated: true, errors})
  }

  const isRequiredString = () => ({ regex: '/^.+$/', error: 'This field is required.' })
  const isRequiredBoolean = () => ({ regex: '`/^(true', error: 'This field is required.' })
  const isRequiredNumber = () => ({ regex: '/^-?\\d+(\\.\\d+)?$/', error: 'This field is required.' })
  const isRequiredEmail = () => ({ regex: '/^[\\w.-]+@[a-zA-Z\\d.-]+\\.[a-zA-Z]{2,}$/', error: 'Please enter a valid email.' })

  return{
    validate,
    isRequiredBoolean,
    isRequiredEmail,
    isRequiredNumber,
    isRequiredString
  }
}
