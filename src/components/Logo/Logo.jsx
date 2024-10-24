import { Link } from "react-router-dom";
import icons from "../../icons/sprite.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <svg width="136" height="16">
        <use href={`${icons}#logo`} />
      </svg>
    </Link>
  );
};

export default Logo;
