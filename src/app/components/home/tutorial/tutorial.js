import Title from '@/app/components/title';
import Image from 'next/image';
import TutorialItem from './tutorialItem';

export default function Tutorial() {
  return (
    <div className="mt-[80px] md:mt-[200px]">
      <Title>ソーラーサンバの設置・操作方法</Title>
      <div className="mx-auto w-full max-w-[480px] px-5 md:max-w-[1240px]">
        <div className="mt-[4.5%] flex justify-center gap-7 max-md:flex-col max-md:items-center md:justify-between">
          <TutorialItem
            step="1"
            title="移動用レールを設置"
            text="パネルの上下に移動用レールを設置し、その上にソーラーサンバ本体を乗せます。"
            subText="※レールや本体は、着脱式でどこにでも持ち運べるため、設置工事などは一切不要です。"
          />
          <TutorialItem
            step="2"
            title="専用の給水タンクに接続"
            text="ソーラーサンバ本体に水道ホースを取り付け、ホースを専用の給水タンクに接続します。"
          />
          <TutorialItem
            step="3"
            title="リモコンのスイッチで自動走行"
            text="リモコンのスイッチを押すだけで、移動用レールとお掃除ロボット本体が、上下左右へと完全自動走行し、くまなく太陽光パネルを自動清掃します。"
          />
        </div>
        <div className="mt-[8%] flex max-md:flex-col">
          <div className="md:w-[65.667%]">
            <Image src="/img-tutorial.jpg" width={788} height={367} alt="" />
            <p className="mt-2 text-[10px] md:mt-4 md:text-[12px]">
              ※１
              パネルや架台の形状及び設置場所の環境等によって、ソーラーサンバを使用できない場所があります。
              <br />
              ※２ 仕様変更による形状・色などが一部相違する場合があります。
            </p>
          </div>
          <div className="flex-1 max-md:mt-6 md:ml-[3.5%] md:px-5">
            <p className="mb-4 text-[14px] md:mb-8 md:text-[16px]">
              アレイの清掃が完了すると、清掃ロボット本体と移動用レールを取り外し、次のアレイに持ち運んでセットした後、1〜3の作業工程を繰り返します。
            </p>
            <p className="text-[10px] md:text-[12px]">
              ※アレイへのセッティングは約3分です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
