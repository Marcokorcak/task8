import Image from "next/image";
import { getCurrentUser } from "../utils/data";

const { name, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div className="contentCenter">
      {avatar && <Image className="profilePic" src={avatar} alt={name} height="145"
          width="145"/>}
      {name && <h1 className=" h1">{name}</h1>}
    </div>
  );
};

export default TopContent;
