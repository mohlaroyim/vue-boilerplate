export interface InputProps {
  error?: string | boolean,
  label?: string,
  placeholder?: string
  disabled?: boolean,
  readOnly?: boolean,
  required?: boolean,
  autoComplete?: boolean
  classList?: string,
  containerClass?: string,
  labelClass?: string,
  dataTestId?: string
}

export interface TextInputProps extends InputProps{
  modelValue: string,
}

export interface TextInputEmitsType{
  (event: 'update:modelValue', value: string): void;
}

export interface NumberInputEmitsType{
  (event: 'update:modelValue', value: number): void;
}

export interface NumberInputProps extends InputProps{
  modelValue: number,
  allowDecimal?: boolean
}

export interface SelectInputEmitsType{
  (event: 'update:modelValue', value: string | number): void;
}

export interface OptionType{
  label: string,
  value: string | number,
  id?: string | number
}

export interface SelectInputProps extends InputProps{
  modelValue: string | number,
  items: OptionType[]
}
