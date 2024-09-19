const ExperienceCard = ({ data }) => {
  const { title, tenure, content, imgUrl } = data;
  return (
    <div className="">
      <div className="m-auto flex items-center justify-between max-w-4xl p-3">
        <div className="flex items-center gap-5">
          <img src={imgUrl} alt="" />
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
        <div className="p-3">
          <p className="text-[#8491A0]">{tenure}</p>
        </div>
      </div>
      <p className="max-w-4xl m-auto p-3">{content}</p>
    </div>
  );
};

export default ExperienceCard;
