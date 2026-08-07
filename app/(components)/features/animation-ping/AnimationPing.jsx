function AnimationPing({
  top,
  left,
  xPositionForContent,
  xPositionForArrow,
  arrowDirction,
}) {
  return (
    <div
      style={{ top, left }}
      className={`w-5 h-5 absolute  rounded-full bg-white group hover:bg-secondary cursor-pointer flex items-center justify-center`}
    >
      <span className="absolute w-full h-full rounded-[50%] left-0 top-0 bg-white/70 animate-ping"></span>
      <div
        className={`absolute min-w-92.5 top-1/2 ${xPositionForContent} -translate-y-1/2 hidden md:block opacity-0 transition-opacity duration-300 group-hover:opacity-100 `}
      >
        <div className="bg-white px-10 py-9 rounded-[20px]">
          <span
            className={`absolute top-1/2 -translate-y-1/2 ${xPositionForArrow} border-13  ${arrowDirction}`}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default AnimationPing;
