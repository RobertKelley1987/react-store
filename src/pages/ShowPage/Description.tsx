type DescriptionProps = {
    desc?: string[]
}

const Description = ({ desc }: DescriptionProps) => {
    return desc ? <article>{desc.map(paragraph => <p>{paragraph}</p>)}</article> : null;
}

export default Description;