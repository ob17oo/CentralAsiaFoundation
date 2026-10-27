import type { Metadata } from "next";
import SitePage from "../components/site-page";

export const metadata: Metadata = {
  title: "Как помочь — CAF",
};

export default function SupportPage() {
  return <SitePage page="support" />;
}
