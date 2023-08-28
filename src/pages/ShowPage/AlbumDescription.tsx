type AlbumDescriptionProps = {
    desc?: string[]
}

const AlbumDescription = ({ desc }: AlbumDescriptionProps) => {
    return desc ? <article>{desc.map(paragraph => <p>{paragraph}</p>)}</article> : null;
}

export default AlbumDescription;