import type { Metadata } from "next";
import SitePage from "../components/site-page";

export const metadata: Metadata = {
  title: "Контакты — CAF",
};

export default function ContactsPage() {
  return <SitePage page="contacts" />;
}
