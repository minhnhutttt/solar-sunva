import PropTypes from 'prop-types';
export default function ProcedureItem({ imageSrc, text }) {
  return (
    <div className="relative flex w-full max-w-[280px] flex-col md:w-[23.3334%]">
      <div>
        <img src={imageSrc} alt="" />
      </div>
      <div className="flex h-[85px] items-center justify-center bg-[#1c1c1c]">
        <p className="text-center text-[12px] leading-relaxed md:text-[18px]">
          {text}
        </p>
      </div>
    </div>
  );
}

ProcedureItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};
