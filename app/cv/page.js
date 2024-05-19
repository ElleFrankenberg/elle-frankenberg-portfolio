import { fetchData } from "@/lib/fetchData";
// import { setMetadata } from "@/utils/setMetaData";
// import Header from "./components/Header";
// import Layout from "./components/layout/Layout";
// import NoDataFound from "../components/NoDataFound";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  //   const data = await fetchData("about");
  //   if (data) {
  //     const Metadata = await setMetadata(data.meta);
  //     return Metadata;
  //   } else {
  //     return null;
  //   }
}

export default async function CvPage() {
  //   const aboutData = await fetchData("about");

  //   if (!aboutData) {
  //     return <NoDataFound />;
  //   }

  //   const { subtitle, submenu, layouts, current_font } = aboutData;

  return (
    <>
      <h1>cv page</h1>
    </>
  );
}
