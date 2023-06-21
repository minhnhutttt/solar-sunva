import Image from 'next/image';
import Link from 'next/link';

export default function HomeMV() {
  return (
    <div className="relative">
      <div className="flex justify-end pl-[8.3334%]">
        <Image src="/mv.jpg" width={1760} height={800} alt="" />
      </div>
      <div className="ml-[4%] mt-[-9%] flex max-md:flex-col md:items-end">
        <Link href="/" className="max-lg:max-w-[360px] max-md:max-w-[200px]">
          <Image src="/logo.png" width={655} height={288} alt="" />
        </Link>
        <p className="pl-10 text-[16px] font-semibold tracking-[0.15em] text-white max-md:mt-3 md:mb-2 md:pl-14 md:text-[20px] lg:text-[30px]">
          太陽光パネルロボット洗浄機 <br />
          新ソーラーサンバ
        </p>
      </div>
    </div>
  );
}
