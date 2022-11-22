import PropTypes from "prop-types";
import "./VideoRow.css";


function VideoRow({ image, title, channel, views, timestamp, description, subs }) {
    return (
        <div className="videoRow">
            <img src={image} />
            <div className="videoRow__text">
                <h3>❤️‍🔥{title}</h3>
                <p className="videoRow__headline">
                    {channel} •
                    <span className="videoRow__subs">
                        <span className="videoRow__subsNumber">{subs}</span> Subscribers
                    </span> {views} • {timestamp}
                </p>
                <p className="videoRow__description">{description}</p>
            </div>

        </div>
    );
}

VideoRow.propTypes = {
    image: PropTypes.any,
    title: PropTypes.any,
    channel: PropTypes.any,
    view: PropTypes.any,
    timestamp: PropTypes.any,
    description: PropTypes.any,
    subs: PropTypes.any,


};

export default VideoRow;
