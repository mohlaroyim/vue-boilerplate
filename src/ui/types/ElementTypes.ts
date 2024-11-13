import type { CSSProperties } from "vue";


// type ButtonType = 'reset'|'submit'|'button'
//
// export interface ButtonProps {
//     submitting?: boolean,
//     disabled?: boolean,
//     classList?: string,
//     title?: string,
//     style?: string | CSSProperties,
//     type?: ButtonType,
//     dataTestId?: string
// }
type TargetTypes = '_blank' | '_self'| '_parent' | '_top'

export interface HyperlinkProps {
  submitting?: boolean,
  disabled?: boolean,
  classList?: string,
  title?: string,
  style?: string | CSSProperties,
  href: string,
  target?: TargetTypes,
  rel?: string
}


export interface ImageProps {
    classList?: string,
    alt?: string,
    style?: string | CSSProperties,
    src: string,
    width?: number | string,
    height?: number | string,
    placeholderImg?: string
}
