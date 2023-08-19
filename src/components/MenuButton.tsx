import Hamburger from './SVGs/Hamburger';
import X from './SVGs/X';
import './MenuButton.css'

type MenuSVGProps = {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuButton = ({ menuOpen, setMenuOpen }: MenuSVGProps) => {
    return (
        <button onClick={() => {
            console.log('click: ' + menuOpen)
            setMenuOpen(true)
        }} className="menu-button">
            {menuOpen ? <X className="site-header-svg"/> : <Hamburger className="site-header-svg"/>}
        </button>
    );
}

export default MenuButton;