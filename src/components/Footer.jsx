import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <div className="min-w-screen relative h-[180px] bg-slate-900 flex items-center dark:bg-purple-900 ">
      <div className="flex items-center justify-between w-full dark:text-white dark:font-semibold">
        <span className="text-sm ml-2 sm:ml-12 sm:w-auto w-[250px]">
          {t("footer.1")}
        </span>
        <ul className="grid gap-2 text-sm p-6 absolute right-0 sm:mr-16">
          <li className="hover:text-purple-400 transition-all">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mauricio-nolting-26293b269/"
            >
              <i className="bx bx-briefcase text-purple-400 px-1"></i>Likedin
            </a>{" "}
          </li>
          <li className="hover:text-purple-400 transition-all">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/mauricio.nolting/"
            >
              <i className="bx bxl-meta text-purple-400 px-1"></i>Facebook
            </a>{" "}
          </li>
          <li className="hover:text-purple-400 transition-all">
            <a
              href="https://www.instagram.com/mauri_rnd/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram text-purple-400 px-1"></i>Instagram
            </a>{" "}
          </li>
          <li className="hover:text-purple-400 transition-all">
            <a
              href="mailto:mauricionolting@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bx-envelope text-purple-400 px-1"></i>Email
            </a>
          </li>
          <li className="hover:text-purple-400 transition-all">
            <a
              href="https://github.com/MauricioNolting"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github text-purple-400 px-1"></i>Git
            </a>
          </li>
        </ul>
      </div>

      <div className="absolute bottom-0 text-xs font-light w-full grid justify-center dark:text-white">
        <span> {t("footer.2")}</span>
      </div>
    </div>
  );
};
export default Footer;
