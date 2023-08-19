import { SVGProps } from "./svg.types";

const X = ({ className }: SVGProps) => {
    return (
        <svg className={className} stroke="current-color" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="m252.846-230.846-22-22L458-480 230.846-707.154l22-22L480-502l227.154-227.154 22 22L502-480l227.154 227.154-22 22L480-458 252.846-230.846Z"/>
        </svg>
    )
}

export default X;