import type { Metadata } from "next";
import SitePage from "../components/site-page";

export const metadata: Metadata = {
  title: "Получить помощь — CAF",
};

export default function GetHelpPage() {
  return <SitePage page="get-help" />;
}
