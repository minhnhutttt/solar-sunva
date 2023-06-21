import Title from '@/app/components/title';
import ProblemItem from './problemItem';

export default function Problem() {
  return (
    <div className="mt-[100px] md:mt-[200px]">
      <Title>
        太陽光パネルの様々な問題点と
        <br />
        ロボットの清掃の必要性
      </Title>
      <div className="mx-auto w-full max-w-[440px] px-5 md:max-w-[1240px]">
        <div className="mt-10 flex flex-wrap justify-between max-md:gap-10 md:mt-[4.8%]">
          <ProblemItem
            imageSrc="/problem-01.png"
            title="ホットスポット問題"
            text="鳥の糞、花粉や落ち葉、塩害、黄砂や火山灰などによる太陽光パネルへの負荷"
          />
          <ProblemItem
            imageSrc="/problem-02.png"
            title="発電効率の低下問題"
            text="汚れの堆積やホットスポットなどによる発電効率の低下及び売電収入の減収"
          />
        </div>
      </div>
    </div>
  );
}
