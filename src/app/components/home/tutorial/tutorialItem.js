import PropTypes from 'prop-types';
export default function TutorialItem({ step, title, text, subText }) {
  return (
    <div className="w-full max-w-[376px] bg-[#1c1c1c] px-5 py-7 md:w-[31.3334%] md:px-6 md:py-9">
      <div className="flex">
        <span className="flex h-[30px] w-[30px] flex-[0_0_30px] items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#393939]">
          {step}
        </span>
        <p className="ml-4 text-[16px] font-semibold md:text-[20px]">{title}</p>
      </div>
      <p className="mt-4 text-[14px] leading-[1.85] md:mt-5 md:text-[16px]">
        {text}
      </p>
      {subText && (
        <p className="text-[11px] leading-[1.85] md:text-[12px]">{subText}</p>
      )}
    </div>
  );
}

TutorialItem.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  subText: PropTypes.node,
};
