import type { Metadata } from "next";
import SitePage from "../components/site-page";

export const metadata: Metadata = {
  title: "Полезная информация — CAF",
};

export default function InformationPage() {
  return <SitePage page="information" />;
}
