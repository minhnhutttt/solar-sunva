import Image from 'next/image';
import Title from '../title';

export default function Compare() {
  return (
    <div className="relative mt-20 md:mt-[14%] px-5 mb-[100px] md:mb-[220px]">
      <Title>旧モデルとの比較</Title>
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1200px]">
        <div className="mt-[4.5%] flex max-md:flex-col justify-between max-md:gap-10">
          <div className="md:w-[47.91%] bg-[#1c1c1c] px-4 pb-6 md:pb-[55px] pt-8 md:pt-[75px]">
            <div className="md:h-[197px]">
              <Image src="/compare.png" width={523} height={197} alt="" />
            </div>
            <div className="mt-10 md:mt-[55px] md:px-3">
              <p className="text-[14px] leading-[1.75] tracking-wider">
                ■ 品番
                <br />
                SOLAR SUNVA
                <br />
                ■ 外形寸法
                <br />
                6m標準仕様：幅760mm × 奥行6495mm × 高さ356mm (洗浄機除く)
                <br />
                4m標準仕様：幅760mm × 奥行4460mm × 高さ356mm (洗浄機除く)
                <br />
                標準機本体(4/6m共通)：幅972mm × 奥行1140mm × 高さ400mm
                <br />
                <br />
                ■ 質量
                <br />
                6m標準仕様：44.04kg(洗浄機、バッテリー4本除く)
                67.98kg(洗浄機、バッテリー4本含む)
                <br />
                4m標準仕様：34.6kg(洗浄機、バッテリー4本除く)
                60.34kg(洗浄機、バッテリー4本含む)
                <br />
                標準機本体(4/6m共通)：21.03kg(バッテリー除く) 60.34kg(バッテリー
                2本含む)
                <br />
                <br />
                ■ 無線通信
                <br />
                無線規格：920MHz 帯特定小電力無線規格 ARIB STD-T108準拠
                <br />
                周波数：Sub-Giga、920MHz帯 (920.6〜923.4MHz 15チャンネル)
                <br />
                <br />
                ■ 散水流量
                <br />
                0ℓ〜7ℓ/分：但し、使用ポンプまたは水道の水頭状況による
                <br />
                <br />
                ■ 使用バッテリー
                <br />
                充電式リチウムバッテリー (マキタ製 BL1850B を1個および2個使用)
                <br />
                <br />
                ■ バッテリー寿命※
                <br />
                繰り返し充放電 約500回
                <br />
                <br />
                ■ 定格電圧
                <br />
                DC18V
                <br />
                <br />
                ■ 連続使用時間
                <br />
                6m標準仕様：約180分 (バッテリーBL1850B(18V/5Ah)
                4個同時使用、気温25℃ 時)
                <br />
                4m標準仕様：約200分 (バッテリーBL1850B(18V/5Ah)
                4個同時使用、気温25℃ 時)
                <br />
                <br />
                ■ 充電器
                <br />
                入力：AC100V 50/60Hz
                <br />
                出力：DC7.2〜18V 9A×2
                <br />
                充電時間：45分 (バッテリー1個または2個 同時使用時)
                <br />
                <br />
                ■ 付属品
                <br />
                BL1850B バッテリー2個 (本商品の仕様などは変更する場合があります)
                <br />
                <br />
                ■ その他
                <br />
                マニュアル走行(最速)：秒速8cm 分速4.8ｍ 時速228ｍ
                <br />
                オート走行(最速)：秒速20cm 分速12ｍ 時速720m
                <br />
                ブラシ回転数：600回転（1分間/回）
              </p>
            </div>
          </div>
          <div className="md:w-[47.91%] bg-[#1c1c1c] px-4 pb-6 md:pb-[55px] pt-8 md:pt-[75px]">
            <div className="flex h-[120px] md:h-[197px] items-center justify-center">
              <p className="text-[16px]">
                新SOLAR SUNVA (ソーラーサンバ）
                <br />
                画像ご提供ください
              </p>
            </div>
            <div className="mt-10 md:mt-[55px] md:px-3">
              <p className="text-[14px] leading-[1.75] tracking-wider">
                ■ 品番
                <br />
                新SOLAR SUNVA
                <br />
                ■ 外形寸法
                <br />
                ２m時外形仕様 ： 幅 717ｍm ｘ 奥行 2520ｍm ｘ 高さ 600ｍm
                <br />
                （散水ポンプ除く）
                <br />
                ４ｍ時外形仕様 ： 幅 717ｍm ｘ 奥行 4510ｍm ｘ 高さ 600ｍm
                <br />
                （散水ポンプ除く）
                <br />
                <br />
                ■ 質量
                <br />
                ４m標準仕様 ： 43．5 ｋｇ （バッテリー4本除く）
                <br />
                <br />
                ■ 無線通信
                <br />
                無線規格 ： ３１５MHz 帯特定小電力無線規格
                <br />
                技適承認番号：２１５－JLX０６２ （工事設計確認証 参照のこと）
                <br />
                <br />
                ■ 散水流量
                <br />
                ０L～７L / 分 ： 但し、使用ポンプ、又は水道の水頭状況による
                <br />
                <br />
                ■ 使用バッテリー
                <br />
                充電式リチウムバッテリー （マキタ製 BL1850B を ２個～４個使用）
                <br />
                DC １８V 6.0Ah 繰り返し充放電 約５００回
                <br />
                <br />
                ■ バッテリー寿命※
                <br />
                繰り返し充放電 約500回
                <br />
                <br />
                ■ 定格電圧
                <br />
                DC18V
                <br />
                <br />
                ■ 連続使用時間
                <br />
                ４ｍ標準仕様： 洗浄機フル動作 約60分、左右走行フル動作
                <br />
                約120分 (バッテリー BL1860B ４個同時使用）
                <br />
                <br />
                ■ 充電器
                <br />
                入力 ： AC100V 50/60Hz
                <br />
                出力 ： DC 7.2～１８V ９A x 2<br />
                充電時間 ： 45分 (BL１86０Bバッテリー1個、又は2個 同時使用時）
                <br />
                <br />
                ■ 付属品
                <br />
                BL１８５０Bバッテリー 2個、充電器 1台、流量計 1個
                <br />
                <br />
                ■ その他
                <br />
                マニュアル走行(最速)：秒速8cm 分速4.8ｍ 時速228ｍ
                <br />
                オート走行(最速)：秒速20cm 分速12ｍ 時速720m
                <br />
                ブラシ回転数：600回転（1分間/回）
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
