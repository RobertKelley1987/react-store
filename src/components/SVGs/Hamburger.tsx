import { SVGProps } from "./svg.types"

const Hamburger = ({ className }: SVGProps) => {
    return (
        <svg className={className} stroke="current-color" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="M160-269.231V-300h640v30.769H160Zm0-195.384v-30.77h640v30.77H160ZM160-660v-30.769h640V-660H160Z"/>
        </svg>
    )
}

export default Hamburger;