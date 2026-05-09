import { redirect } from "next/navigation";

export const metadata = {
  title: "Get Started"
};

export default function StartPage() {
  redirect("/login");
}
