import snapchat from "../images/snapchat.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import Image from "next/image";
import { getSocialLinks } from "csc-start/utils/data";

const SocialLinks = () => {
  const getLinks = getSocialLinks();

  if (getLinks !== null) {
    return (
      <div className="links">
        {getLinks.map((link) => {
          switch (link.title) {
            case "Twitter":
                return (
                  <a href={link.url}>
                    {" "}
                    <Image
                      src={twitter}
                      alt={"Twitter link"}
                      height="75"
                      width="75"
                    />{" "}
                  </a>
                );
            case "Facebook":
              return (
                <a href={link.url}>
                  {" "}
                  <Image
                    src={facebook}
                    alt={"Facebook link"}
                    height="75"
                    width="75"
                  />{" "}
                </a>
              );
              case "Snapchat":
                return (
                  <a href={link.url}>
                    {" "}
                    <Image
                      src={snapchat}
                      alt={"Snapchat link"}
                      height="75"
                      width="75"
                    />{" "}
                  </a>
                );
            case "Instagram":
              return (
                <a href={link.url}>
                  {" "}
                  <Image
                    src={instagram}
                    alt={"Instagram link"}
                    height="75"
                    width="75"
                  />{" "}
                </a>
              );
            default:
              return <p>No social links found</p>;
          }
        })}
      </div>
    );
  }
};

export default SocialLinks;
