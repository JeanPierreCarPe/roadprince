import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  logo,
  twitterLogo,
} from "@/public/assets";
import Image from "next/image";
import SocialMediaButton from "../components/SocialMediaButton";

const quickLinks = [
  { label: "Home", href: "/", key: "footer-home" },
  { label: "Discover", href: "#discover", key: "footer-discover" },
  { label: "Plan your trip", href: "#plan-your-trip", key: "footer-plan" },
  { label: "Gallery", href: "#Gallery", key: "footer-gallery" },
  { label: "Share your story", href: "#share-your-story", key: "footer-share" },
];

const Footer = () => {
  return (
    <section className="w-full flex flex-col max-container px-10 md:px-20 pt-8 bg-black-background gap-8">
      <div className="w-full flex flex-col sm:flex-row gap-10 items-start justify-between">
        <div className="flex flex-col sm:flex-row sm:gap-40 gap-40 items-start flex-wrap min-w-[300px]">
          <Image src={logo} alt="logo" height={80} />
          <ul className="flex flex-col gap-7 min-w-[150px]">
            <h4 className="text-white text-base">Quick links</h4>
            {quickLinks.map((item) => (
              <li key={item.key}>
                <a href={item.href} className="text-white text-base">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-fit">
          <h4 className="text-white">Follow us</h4>
          <div className="flex gap-5">
            <SocialMediaButton image={facebookLogo} alt="facebook logo" />
            <SocialMediaButton image={linkedinLogo} alt="linkedin logo" />
            <SocialMediaButton image={instagramLogo} alt="instagram logo" />
            <SocialMediaButton image={twitterLogo} alt="twitter logo" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3">
        <span className="text-base text-white">
          © 2023 Roadprince. All rights reserved.
        </span>
      </div>
    </section>
  );
};

export default Footer;
