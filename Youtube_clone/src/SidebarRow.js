import PropTypes from "prop-types";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title}</h2>

        </div>
    );
}
SidebarRow.propTypes = {
    title: PropTypes.any,
    Icon: PropTypes.any,
    selected: PropTypes.any
};

export default SidebarRow;
