import { getLinksLinks } from "csc-start/utils/data";

const NonSocialLinks = () => {
  const nonLinks = getLinksLinks();

  if (nonLinks !== null) {
    return (
      <div className="buttons">
        {nonLinks.map((link => {
            return <a className=" " href={link.url} key={link.id}>
            <button className="button max-w-md mt-6 mb-6" >
           <p>{link.title}</p>
       </button>
       </a>
        }))}
      </div>
    );
  }
};

export default NonSocialLinks;
