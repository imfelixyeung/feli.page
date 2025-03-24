import Content from "@/components/Content";
import FeliIcon from "@/components/FeliIcon";
import PageHead from "@/components/PageHead";

const FeliIcons = () => {
  const x = "          ";
  const xx = x + x + x;
  const array = xx.split("");
  const feli = array.map(() => {
    return (
      <div>
        <FeliIcon />
      </div>
    );
  });
  return (
    <>
      <PageHead title="Feli | Feli Page" />
      <Content>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 px-2">
          {feli}
        </div>
      </Content>
    </>
  );
};

export default FeliIcons;
