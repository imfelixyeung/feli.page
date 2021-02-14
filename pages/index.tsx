import Content from "@/components/Content";
import FeliIcon from "@/components/FeliIcon";
import PageHead from "@/components/PageHead";

const Home = () => {
    return (
        <>
            <PageHead />
            <Content center>
                <div className="mt-8 flex flex-col items-center">
                    <FeliIcon margin={16} fixed />
                    <h1>
                        Welcome to <span className="text-feli">Feli.Page!</span>
                    </h1>
                </div>
            </Content>
        </>
    );
};

export default Home;
