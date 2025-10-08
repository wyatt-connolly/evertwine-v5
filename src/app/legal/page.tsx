import { Suspense } from "react";
import LegalDocuments from "@/components/LegalDocuments";

export default function LegalPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-900 text-white pt-20 flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <LegalDocuments />
    </Suspense>
  );
}
