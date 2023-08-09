import "./Text.css";

const Text = ({ innertext, colorCode }) => {
  return (
    <p className="text" style={{ color: colorCode }}>
      {innertext.toUpperCase()}
    </p>
  );
};

export default Text;
