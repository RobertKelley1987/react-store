import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ScreenIsBigContext } from '../context/ScreenIsBigContext';
import './MenuList.css';

type MenuListProps = {
    category: string,
    pathSlug?: string,
    pages: string[],
    closeMenu: () => void,
}

const MenuList = ({ category, pathSlug, pages, closeMenu }: MenuListProps) => {
    const [sectionOpen, setSectionOpen] = useState(false);
    const screenIsBigContext = useContext(ScreenIsBigContext)

    const categorySlug = pathSlug || category.toLowerCase().replaceAll(' ', '-');

    const renderList = () => {
        return (screenIsBigContext?.screenIsBig || sectionOpen) && (
            <ul className="menu-list">
                {pages.map(page => {
                    const pageSlug = page.toLowerCase().replaceAll(' ', '-');
                    
                    return (
                        <li key={page} className="menu-list-item">
                            <Link onClick={closeMenu} to={`/${categorySlug}/${pageSlug}`}>{page}</Link>
                        </li>
                    )
                })}
            </ul>
        );
    }

    return ( 
        <div className="menu-list-wrapper">              
            <li className="menu-list-heading-wrapper" onClick={() => setSectionOpen(prev => !prev)}>
                <h1 className="menu-heading">{category}</h1>
                <span className="material-symbols-outlined menu-chevron">expand_more</span>
            </li>
            {renderList()}
        </div>
    );
}

export default MenuList;