import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://avatars.githubusercontent.com/u/56964612?s=400&u=37f3f3febc834566da0a2b8618153c6bd85ea6d0&v=4"
                channel="Avijit Saha"
                verified
                subs={300}
                noOfVideos={800}
                description="You can find awesome programming lessons here. You can find awesome programming lessons here."
            />
            <hr />
            <VideoRow
                views="1.4M"
                subs="695k"
                timestamp="20 minutes ago"
                channel="Avijit Saha"
                title="Lets build a you-tube clone"
                image="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                description="You can find awesome programming lessons here. You can find awesome programming lessons here."
            />
            <VideoRow
                views="1.4M"
                subs="695k"
                timestamp="20 minutes ago"
                channel="Avijit Saha"
                title="Lets build a you-tube clone"
                image="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                description="You can find awesome programming lessons here. You can find awesome programming lessons here."
            />
            <VideoRow
                views="1.4M"
                subs="695k"
                timestamp="20 minutes ago"
                channel="Avijit Saha"
                title="Lets build a you-tube clone"
                image="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                description="You can find awesome programming lessons here. You can find awesome programming lessons here."
            />
            <VideoRow
                views="1.4M"
                subs="695k"
                timestamp="20 minutes ago"
                channel="Avijit Saha"
                title="Lets build a you-tube clone"
                image="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                description="You can find awesome programming lessons here. You can find awesome programming lessons here."
            />
            <VideoRow
                views="1.4M"
                subs="695k"
                timestamp="20 minutes ago"
                channel="Avijit Saha"
                title="Lets build a you-tube clone"
                image="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                description="You can find awesome programming lessons here. You can find awesome programming lessons here."
            />
            <VideoRow
                views="1.4M"
                subs="695k"
                timestamp="20 minutes ago"
                channel="Avijit Saha"
                title="Lets build a you-tube clone"
                image="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                description="You can find awesome programming lessons here. You can find awesome programming lessons here."
            />
            <VideoRow
                views="1.4M"
                subs="695k"
                timestamp="20 minutes ago"
                channel="Avijit Saha"
                title="Lets build a you-tube clone"
                image="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                description="You can find awesome programming lessons here. You can find awesome programming lessons here."
            />



        </div>
    );
}

export default SearchPage;
