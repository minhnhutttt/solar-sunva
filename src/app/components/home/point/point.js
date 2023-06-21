import Title from '../../title';
import PointItem from './pointItem';

export default function Point() {
  return (
    <div className="mt-[100px] md:mt-[200px]">
      <Title>
        ソーラーサンバが太陽光パネルの洗浄に
        <br />
        選ばれる3つのポイント
      </Title>
      <div className="mx-auto mt-[5.5%] flex w-full max-w-[440px] flex-col gap-10 px-5 md:max-w-[1240px] md:gap-[84px]">
        <PointItem
          imageSrc="/point-01.jpg"
          title="ソーラーパネル掃除ロボットならわずか2～３日でメガソーラーパネルを洗浄可能"
          text={
            <>
              太陽光発電パネル洗浄ロボット「SOLAR
              SUNVA（ソーラーサンバ）」は、ソフトナイロン回転ブラシとスプリンクラー散水で、太陽光パネルの表面を傷つけずに清掃し、発熱効果を最高に保ちます。
              <br />
              遠隔操作スプレー装置(当社特許)を併用することで、特殊洗剤を汚れた部分のみに塗布し清掃することが可能です。ソーラーサンバを使えば、1MWのメガソーラーをわずか2〜3日で清掃できます。(スタッフ2名稼働)
            </>
          }
        />
        <PointItem
          imageSrc="/point-02.jpg"
          title="人力の洗浄作業に比べ、約8分の１以下の消費水量で作業スピードもアップ"
          text={
            <>
              やわらかなナイロン製ブラシが、毎秒２０回転しながら時速３〜５kmで滑らかに横移動し、太陽光パネルを清掃していきます。
              <br />
              消費水量も手作業に比べると約8分の１以下で済みます。
              <br />
              例えば１５０MWを清掃する場合、約３００万リットル以上も手作業に比べて消費水量が少なく済みます。
            </>
          }
        />
        <PointItem
          imageSrc="/point-03.jpg"
          title={
            <>
              クオリティを落とさず、運用コストを
              <br />
              削減できるパネル洗浄
            </>
          }
          text={
            <>
              SOLAR
              SUNVA(ソーラーサンバ)は、ムラなくパネルの隅々まで作業が可能なため、オペレーターの負担が少なく、時間経過によるクオリティ低下の心配がありません。
              <br />
              またユーザーが自由に調達できる汎用バッテリーの採用により運用コストの削減が実現しました。
            </>
          }
        />
      </div>
    </div>
  );
}
