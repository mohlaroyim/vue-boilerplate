import type {CSSProperties} from "vue";
type ButtonType = 'reset'|'submit'|'button'

export interface ButtonProps {
  submitting?: boolean,
  disabled?: boolean,
  classList?: string,
  title?: string,
  style?: string | CSSProperties,
  type?: ButtonType,
  dataTestId?: string
}
