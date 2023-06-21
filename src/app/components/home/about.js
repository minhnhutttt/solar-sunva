import Image from 'next/image';
import Button from '../button';

export default function HomeAbout() {
  return (
    <div className="relative mt-[7.5%] px-5">
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1600px]">
        <div className="mb-[10%] flex max-md:flex-col">
          <div className="md:w-[54.625%]">
            <Image src="/img-about.png" width={874} height={1016} alt="" />
          </div>
          <div className="flex-1">
            <div className="mt-8 md:ml-[-4%]">
              <Image
                className="max-md:mx-auto max-md:max-w-[300px]"
                src="/about-us.png"
                width={758}
                height={121}
                alt=""
              />
            </div>
            <div className="mt-10 text-[14px] font-semibold leading-relaxed tracking-widest max-md:text-center md:ml-[-7%] md:mt-[18%] md:text-[20px] lg:text-[30px]">
              太陽光パネルの汚れをフルオートで洗浄する
              <br />
              太陽光発電パネル洗浄ロボット
              <br />
              「SOLAR SUNVA（ソーラーサンバ）」
            </div>
            <div className="mt-8 text-[12px] leading-relaxed max-md:text-center md:ml-[10%] md:mt-[10.5%] md:text-[14px] lg:text-[18px] text-[#e5e5e5]">
              ワールドスキャンプロジェクトは、近年設置数が増加した太陽光パネルの汚れに着目し、パネルの上を掃除するロボットを開発しました。
              <br />
              太陽光パネルに付着している鳥の糞や花粉、落葉や土などのこびりついた汚れを洗い落とすことで、発電効率の改善が期待されます。
              <br />
              そのため、現在、世界中で太陽光パネルの掃除が行われていますが、そのほとんどが人力による作業となっています。
              <br />
              <br />
              ソーラーサンバは、人力による掃除作業のプロセスをロボットでオートメーション化することができます。
              オートメーション化することで、より多くのパネルを掃除でき、よりムラの少ない仕上がりになります。折り畳み式かつ軽量で持ち運びやすいため、太陽光パネルの設置角度が35度でもロボットを簡単に稼働させられます。発電所の規模も低圧～特別高圧まで対応可能です。
            </div>
          </div>
        </div>
        <Button link="/">旧モデルとの比較</Button>
      </div>
    </div>
  );
}
