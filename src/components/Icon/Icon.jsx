import classNames from "classnames";
import { Sprite as MinistaIcon } from "minista/assets";
import "./Icon.scss";

const Icon = (props) => {
  const { className, name } = props;
  const iconName = name || "search";

  return (
    <span className={classNames(className, "icon")}>
      <MinistaIcon
        src={`/src/assets/icons/${iconName}.svg`}
        symbolId={iconName}
      />
    </span>
  );
};

export default Icon;
