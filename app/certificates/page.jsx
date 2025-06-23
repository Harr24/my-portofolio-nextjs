'use client';

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(
  () => import('../components/PdfViewer'),
  { ssr: false }
);

export default function CertificatesPage() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-semibold">Certificates</h1>
      <PdfViewer fileUrl="/sertifikat-pkl.pdf" />
      <PdfViewer fileUrl="/sertifikat-python.pdf" />
      <PdfViewer fileUrl="/sertifikat-ccna.pdf" />
    </main>
  );
}
