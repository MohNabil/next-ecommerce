import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";

type ProductLayoutProps = {
  children: React.ReactNode;
};
export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <>
      <Header />
      <Link href="/" className="flex justify-start items-center ml-4 w-80">
        <BsFillArrowLeftCircleFill size={30} color="orange" />
        <span className="text-orange-500 hover:text-orange-300 text-2xl font-semibold py-2 px-4 rounded">
          Back to Products
        </span>
      </Link>
      <main className="h-screen flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
