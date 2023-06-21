import PropTypes from 'prop-types';
export default function PointItem({ imageSrc, title, text }) {
  return (
    <div className="flex max-md:flex-col">
      <div className="md:w-[48%]">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="flex-1 max-md:mt-5 md:ml-[4%]">
        <h5 className="text-[16px] font-semibold tracking-wider md:text-[24px]">
          {title}
        </h5>
        <p className="mt-[5%] text-[12px] leading-[1.8] md:text-[18px]">
          {text}
        </p>
      </div>
    </div>
  );
}

PointItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
};
