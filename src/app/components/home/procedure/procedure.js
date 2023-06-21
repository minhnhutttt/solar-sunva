import Title from '@/app/components/title';
import ProcedureItem from './procedureItem';

export default function Procedure() {
  return (
    <div className="mt-[80px] md:mt-[180px]">
      <Title>ソーラーサンバの太陽光パネル洗浄手順</Title>
      <div className="mx-auto w-full max-w-[320px] px-5 md:max-w-[1240px]">
        <div className="mt-[4%] space-y-10 md:space-y-[2.8%]">
          <div className="flex flex-wrap space-x-[2.16667%] [&>*+*]:before:absolute [&>*+*]:before:left-[calc(50%-10px)] [&>*+*]:before:top-[-10px] [&>*+*]:before:z-[10] [&>*+*]:before:h-[23px] [&>*+*]:before:w-[20px] [&>*+*]:before:bg-[url('/ic-arrow.png')] [&>*+*]:before:bg-cover max-md:[&>*+*]:before:rotate-90 md:[&>*+*]:before:left-[-20px] md:[&>*+*]:before:top-[calc(50%-16px)] md:[&>*+*]:before:h-[39px] md:[&>*+*]:before:w-[34px]">
            <ProcedureItem imageSrc="/procedure-01.jpg" text="運搬・設置" />
            <ProcedureItem
              imageSrc="/procedure-02.jpg"
              text={
                <>
                  水道水からカルキ等の
                  <br />
                  不純物取り
                </>
              }
            />
            <ProcedureItem
              imageSrc="/procedure-03.jpg"
              text={
                <>
                  ソーラーサンバ
                  <br />
                  清掃開始
                </>
              }
            />
            <ProcedureItem imageSrc="/procedure-04.jpg" text="水洗い" />
          </div>
          <div className="flex flex-wrap space-x-[2.16667%] [&>*+*]:before:absolute [&>*+*]:before:left-[calc(50%-10px)] [&>*+*]:before:top-[-10px] [&>*+*]:before:z-[10] [&>*+*]:before:h-[23px] [&>*+*]:before:w-[20px] [&>*+*]:before:bg-[url('/ic-arrow.png')] [&>*+*]:before:bg-cover max-md:[&>*+*]:before:rotate-90 md:[&>*+*]:before:left-[-20px] md:[&>*+*]:before:top-[calc(50%-16px)] md:[&>*+*]:before:h-[39px] md:[&>*+*]:before:w-[34px]">
            <ProcedureItem imageSrc="/procedure-05.jpg" text="ブラッシング" />
            <ProcedureItem
              imageSrc="/procedure-06.jpg"
              text={
                <>
                  刷毛状ワイパーで
                  <br />
                  拭き取り仕上げ
                </>
              }
            />
            <ProcedureItem
              imageSrc="/procedure-07.jpg"
              text={
                <>
                  ソーラーサンバ
                  <br />
                  清掃完了
                </>
              }
            />
            <ProcedureItem
              imageSrc="/procedure-08.jpg"
              text={
                <>
                  機能維持&資産保全
                  <br />
                  &発電量アップ
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
