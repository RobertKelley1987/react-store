type LoadingProps = {
    children: React.ReactElement,
    isLoading: boolean
}

const Loading = ({ children, isLoading }: LoadingProps) => {
    return isLoading ? <p className="loading">Loading...</p> : children;
}

export default Loading;