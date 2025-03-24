import Content from "@/components/Content";
import PageHead from "@/components/PageHead";
import Link from "next/link";

const $404 = () => {
  return (
    <>
      <PageHead title="Not Found" />
      <Content center>
        <div className="my-8 flex flex-col items-center">
          <div className="mx-8 max-w-md md:max-w-lg">
            <img
              className="w-full"
              src="/assets/images/undraw_page_not_found.svg"
              alt="404 Image"
            />
          </div>
          <div className="mt-8 text-2xl font-bold">
            This page could not be found
          </div>
          <div className="mt-4 text-xl">
            <Link href="/">
              <a className="text-feli-darker hover:text-feli-dark active:text-feli px-4 py-2 transition-colors">
                Return Home
              </a>
            </Link>
          </div>
        </div>
      </Content>
    </>
  );
};
export default $404;
