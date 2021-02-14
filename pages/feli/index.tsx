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
                <div className="flex flex-wrap gap-3 mt-8 px-2 items-center justify-center">
                    {feli}
                </div>
            </Content>
        </>
    );
};

export default FeliIcons;
