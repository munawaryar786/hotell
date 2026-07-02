import type { Metadata } from "next";
import BranchDetailPage from "@/components/branches/BranchDetailPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Kings Hostel 1",
  "Kings Hostel 1 branch details, address near Raiwind Road, rooms, facilities, and booking inquiry.",
  "/branches/kings-hostel-1"
);

export default function KingsHostel1Page() {
  return <BranchDetailPage params={{ slug: "kings-hostel-1" }} />;
}
