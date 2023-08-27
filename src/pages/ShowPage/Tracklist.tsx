const formatTrackNum = (trackNum: number) => trackNum < 10 ? `0${trackNum}` : trackNum;

type TracklistProps = {
    tracklist: string[] | undefined
}

const Tracklist = ({ tracklist }: TracklistProps) => {
    if(tracklist) {
        return (
            <div>
                <h3>Tracklist</h3>
                <ul>{tracklist.map((track, index) => <li>{`${formatTrackNum(index + 1)}. ${track}`}</li>)}</ul>
            </div>
        );
    } else {
        return null;
    }
}

export default Tracklist;