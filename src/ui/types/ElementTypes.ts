import type {CSSProperties} from "vue";


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

export interface HyperlinkProps {
    submitting?: boolean,
    disabled?: boolean,
    classList?: string,
    title?: string,
    style?: string | CSSProperties,
    href: string
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
