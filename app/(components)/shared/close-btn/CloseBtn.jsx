function CloseBtn({ fn, ariaLabel, className, icon }) {
  return (
    <button aria-label={ariaLabel} onClick={fn} className={className}>
      {icon}
    </button>
  );
}

export default CloseBtn;
