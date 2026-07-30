import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const socialMediaIcons = [
  { id: 1, icon: FaFacebookF, href: "#" },
  { id: 2, icon: FaYoutube, href: "#" },
  { id: 3, icon: FaXTwitter, href: "#" },
  { id: 4, icon: FaTiktok, href: "#" },
];
function SocialmediaLinks() {
  return (
    <ul className="flex items-center gap-3">
      {socialMediaIcons.map((icon) => {
        return (
          <li
            key={icon.id}
            className="w-8 h-8 flex items-center justify-center bg-[#f3f3f3] text-primary"
          >
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              <icon.icon size={16} weight="fill" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialmediaLinks;
