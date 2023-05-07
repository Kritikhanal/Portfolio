const Footer = () => {
  return (
    <footer className="light-bg flex justify-space">
      <span className="white">
        Copyright © 2023 <a href="/">Kritima</a> - All rights reserved.
      </span>
      <ul className="flex">
        <li>
          <a
            href="https://www.facebook.com/kreetima/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/facebook.svg"
              width={24}
              height={24}
              alt="facebook-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kritima_khanal/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/instagram.svg"
              width={24}
              height={24}
              alt="instagram-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kritima-khanal-a4809a257/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/linkedin.svg"
              width={24}
              height={24}
              alt="linkedin-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Kritikhanal"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/github.svg"
              width={24}
              height={24}
              alt="github-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@kritimakhanal6232/featured"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/youtube.svg"
              width={24}
              height={24}
              alt="youtube-icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
