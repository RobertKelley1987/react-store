import { SVGProps } from './svg.types';

const ShoppingBag = ({ className }: SVGProps) => {
    return (
        <svg className={className} stroke="current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24" width="24">
            <path d="M255.384-120q-23.057 0-39.221-16.163Q200-152.327 200-175.384v-449.232q0-23.057 16.163-39.221Q232.327-680 255.384-680h89.231v-24.616q0-56.846 39.27-96.115Q423.154-840 480-840t96.115 39.269q39.27 39.269 39.27 96.115V-680h89.231q23.057 0 39.221 16.163Q760-647.673 760-624.616v449.232q0 23.057-16.163 39.221Q727.673-120 704.616-120H255.384Zm0-30.769h449.232q9.23 0 16.923-7.692 7.692-7.693 7.692-16.923v-449.232q0-9.23-7.692-16.923-7.693-7.692-16.923-7.692h-89.231v104.615q0 6.577-4.458 10.981-4.459 4.404-11.116 4.404t-10.926-4.404q-4.27-4.404-4.27-10.981v-104.615h-209.23v104.615q0 6.577-4.458 10.981-4.459 4.404-11.116 4.404t-10.926-4.404q-4.27-4.404-4.27-10.981v-104.615h-89.231q-9.23 0-16.923 7.692-7.692 7.693-7.692 16.923v449.232q0 9.23 7.692 16.923 7.693 7.692 16.923 7.692ZM375.385-680h209.23v-24.616q0-44.153-30.23-74.384-30.231-30.231-74.385-30.231T405.615-779q-30.23 30.231-30.23 74.384V-680ZM230.769-150.769V-649.231-150.769Z"/>
        </svg>
    )
}

export default ShoppingBag;