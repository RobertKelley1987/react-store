import { Link } from 'react-router-dom';
import { ProductList } from '../types';
import './PageNumbers.css';

type PageNumbersProps = {
    pages: ProductList[],
    currentPage: number,
    currentPath: string
}

const PageNumbers = ({ pages, currentPage, currentPath }: PageNumbersProps) => {
    const handleClick = () => {
        window.scrollTo({ top: 0 });
    }

    const renderPageLink = (pageNum: number) => {
        return (
            <Link 
                onClick={handleClick}
                className={currentPage === pageNum ? "page-number page-number-selected" : "page-number"} 
                key={pageNum} 
                to={`${currentPath}?page=${pageNum}`}
            >
                {pageNum}
            </Link>
        )
    }

    const pageNums = pages.map((page, index) => index + 1);

    const renderPrevLinks = () => {
        let prevPages;
        if(currentPage > 4) {
            prevPages = [currentPage - 2, currentPage - 1];
        } else {
            prevPages = pageNums.slice(0, currentPage - 1);
            console.log(prevPages);
        }
        return prevPages.map(pageNum => renderPageLink(pageNum));
    }

    const renderNextLinks = () => {
        let nextPages;
        if(pageNums.length - currentPage > 3) {
            nextPages = [currentPage + 1, currentPage + 2];
        } else {
            nextPages = pageNums.slice(currentPage, pageNums.length);
        }
        return nextPages.map(pageNum => renderPageLink(pageNum));
    }

    const renderTextLink = (text: string, pageNum: number) => {
        return (
            <Link to={`${currentPath}?page=${pageNum}`} className="page-numbers-text">{text}</Link> 
        );
    }

    const renderPageNumbers = () => {
        return (
            <div className="page-numbers">
                {currentPage !== 1 && renderTextLink('Prev', currentPage - 1)}
                {currentPage > 4 && renderPageLink(1)}
                {currentPage > 4 && <span className="page-numbers-text">...</span>}
                {renderPrevLinks()}
                {renderPageLink(currentPage)}
                {renderNextLinks()}
                {pageNums.length - currentPage > 3 && <span className="page-numbers-text">...</span>}
                {pageNums.length - currentPage > 3 && renderPageLink(pageNums.length)}
                {currentPage !== pageNums.length && renderTextLink('Next', currentPage + 1)}
            </div>
        );
    }

    return pageNums.length > 1 ? renderPageNumbers() : null;
}

export default PageNumbers;