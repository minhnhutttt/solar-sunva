import PropTypes from 'prop-types';
export default function Title({ children }) {
  return (
    <h3 className="px-5 text-center text-[18px] font-semibold tracking-wider md:text-[36px] lg:text-[48px]">
      {children}
    </h3>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
