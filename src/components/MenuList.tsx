import { Fragment, useState } from 'react';
import Chevron from "./SVGs/Chevron";

type MenuListProps = {
    heading: string,
    className?: string,
    children: React.ReactNode
}

const MenuList = ({ heading, className, children }: MenuListProps) => {
    const [sectionOpen, setSectionOpen] = useState(false);

    return ( 
        <Fragment>              
            <li className="menu-heading-wrapper" onClick={() => setSectionOpen(prev => !prev)}>
                <h1 className="menu-heading">{heading}</h1>
                <Chevron className="site-header-svg" flipped={sectionOpen}/>
            </li>

            {sectionOpen && <ul className={className}>{children}</ul>}
        </Fragment>
    );
}

export default MenuList;