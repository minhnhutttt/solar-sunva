import PropTypes from 'prop-types';
export default function ProblemItem({ imageSrc, title, text }) {
  return (
    <div className="flex flex-col md:w-[47.75%]">
      <h5 className="text-[18px] font-semibold md:text-[24px]">{title}</h5>
      <p className="mt-2 text-[12px] leading-relaxed md:mt-5 md:text-[18px]">
        {text}
      </p>
      <div className="mt-2 md:mt-5">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
}

ProblemItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
};
