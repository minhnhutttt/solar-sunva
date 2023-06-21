import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
export default function Button({ link, children }) {
  return (
    <div className="flex justify-center">
      <Link
        href={link}
        className="relative flex h-[70px] w-full max-w-[300px] items-center justify-center rounded-[50px] border-[5px] border-[#1c1c1c] text-[18px] font-semibold md:h-[110px] md:max-w-[500px] md:text-[20px] lg:max-w-[695px] lg:text-[30px]"
      >
        {children}
        <span className="absolute right-6 md:right-10 lg:right-20">
          <Image
            className="max-md:max-w-[24px]"
            src="/ic-button.png"
            width={43}
            height={43}
            alt=""
          />
        </span>
      </Link>
    </div>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
