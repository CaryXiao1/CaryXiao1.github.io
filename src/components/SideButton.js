import PropTypes from "prop-types";

const SideButton = ({ text, section, idScroll }) => {
  let id_func = () =>
    document.getElementById(idScroll).scrollIntoView({ behavior: "smooth" });

  return (
    <button
      className={section ? "side-label section" : "side-label subsection"}
      onClick={id_func}
    >
      {text}
    </button>
  );
};

SideButton.defaultProps = {
  text: "button",
  section: true,
  onClick: null,
  idScroll: 0,
};

SideButton.propTypes = {
  text: PropTypes.string,
  section: PropTypes.bool,
  idScroll: PropTypes.string,
};

export default SideButton;
