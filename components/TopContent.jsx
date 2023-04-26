import { getCurrentUser } from "../utils/data";

const { name, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div className="contentCenter">
      {avatar && (
        <img className="profilePic"
          src={avatar}
          alt={name}
        />
      )}
      {name && <h1 className=" h1">{name}</h1>}
    </div>
  );
};

export default TopContent;
