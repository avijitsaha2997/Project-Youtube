import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
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
                channel="avijit Saha"
                verified
                subs={300}
                description="You can find awesome programming lessons here. "
            />



        </div>
    );
}

export default SearchPage;
