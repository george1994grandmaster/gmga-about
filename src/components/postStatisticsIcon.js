const Icon = (props) => {
  const { icon, count, blue, pinned, handleClick, marginRight } = props;

  return (
    <button
      style={{ marginRight: marginRight }}
      className="handleResultItem"
      onClick={handleClick}
    >
      <div
        className={
          blue && !pinned ? "viewIconBlue viewIcon" : "viewIcon viewIconGray"
        }
      >
        <img src={icon} alt="userView" />
      </div>
      <p
        className={
          blue && !pinned
            ? "handleCount viewIconBlue"
            : "handleCount viewIconGray"
        }
      >
        {count}
      </p>
    </button>
  );
};

export default Icon;
