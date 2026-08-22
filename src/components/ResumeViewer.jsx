import { LuLoaderCircle } from 'react-icons/lu';
import { Document, Page, pdfjs } from 'react-pdf';
import { useResizeDetector } from 'react-resize-detector';
import { useLanguage } from '../hooks/useLanguage';
// Configure the worker to process PDF files background-side
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function ResumeViewer() {
    const { width, ref } = useResizeDetector();
    const {language}=useLanguage()

    return (
        <div
            ref={ref}
            style={{
                width: '100%',
                maxWidth: '640px', // Set your preferred maximum width
                margin: '0 auto'
            }}
        >
            <Document file={`/assets/file/Resume-${language}.pdf`} loading={<LuLoaderCircle className='size-15 mx-auto animate-spin' />}>

                <Page
                    pageNumber={1}
                    width={width ? Math.min(width, 900) : 300} // Dynamic width calculation
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />

            </Document>
        </div>
    );
}