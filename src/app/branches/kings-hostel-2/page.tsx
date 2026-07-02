import type { Metadata } from "next";
import BranchDetailPage from "@/components/branches/BranchDetailPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Kings Hostel 2",
  "Kings Hostel 2 branch details, Dream Avenue address, rooms, facilities, and booking inquiry.",
  "/branches/kings-hostel-2"
);

export default function KingsHostel2Page() {
  return <BranchDetailPage params={{ slug: "kings-hostel-2" }} />;
}
