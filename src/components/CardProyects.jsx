/* eslint-disable react/prop-types */
const CardProyects = ({ proyect }) => {
  return (
    <article className="basis-52 min-w-[50px] max-w-max border-2 dark:border-slate-950 mx-2 relative grid grid-rows-[1fr,_auto] rounded-t-md">
      <div>
        <div className="w-auto border-2 rounded-md">
          <img className="" src={proyect.img} alt="" />
        </div>

        <span className=" text-xs px-2 w-screen">{proyect.leng}</span>

        <h3 className="font-bold text-center border-t dark:border-t-slate-950">
          {proyect.title}
        </h3>
        <p className="text-start">{proyect.description}</p>
      </div>

      <div className="mx-auto">
        <a
          className="cursor-pointer "
          target="_blank"
          rel="noopener noreferrer"
          href={proyect.link}
        >
          <i className="bx bx-chevrons-right text-4xl transition-all hover:text-purple-400 dark:hover:text-purple-900 hover:font-bold"></i>
        </a>
      </div>
    </article>
  );
};
export default CardProyects;
