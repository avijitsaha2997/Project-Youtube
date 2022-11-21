import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">

            <img className="videoCard__thumbnail" src={image} alt=""></img>

            <div className="videoCard__info">

                <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />

                <div className="videoCard__text">

                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>

                </div>

            </div>

        </div>
    );
}
VideoCard.propTypes = {
    image: PropTypes.any,
    title: PropTypes.any,
    channel: PropTypes.any,
    view: PropTypes.any,
    timestamp: PropTypes.any,
    channelImage: PropTypes.any

};

export default VideoCard;
