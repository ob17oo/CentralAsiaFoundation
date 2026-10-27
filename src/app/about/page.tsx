import type { Metadata } from "next";
import SitePage from "../components/site-page";

export const metadata: Metadata = {
  title: "О фонде — CAF",
};

export default function AboutPage() {
  return <SitePage page="about" />;
}
