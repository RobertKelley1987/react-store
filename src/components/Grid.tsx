import './Grid.css';

type GridProps = {
    children: React.ReactNode
}

const Grid = ({ children }: GridProps) => {
    return <section className="grid">{children}</section>
}

export default Grid;