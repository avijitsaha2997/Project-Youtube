import Avatar from "@mui/material/Avatar";
import "./ChannelRow.css";
function ChannelRow({ image, channel, subs, noOfVideos, description, verified }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>{channel}</h4>
            </div>
        </div>
    );
}

export default ChannelRow;
