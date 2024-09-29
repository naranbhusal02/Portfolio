document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-btn');
    const btnText = downloadBtn.querySelector('.btn-text');
    const btnIcon = downloadBtn.querySelector('.btn-icon');

    downloadBtn.addEventListener('click', () => {
        if (!downloadBtn.classList.contains('downloading')) {
            downloadBtn.classList.add('downloading');
            btnText.textContent = 'Downloading...';

            // Simulating download process
            setTimeout(() => {
                // Create a Blob with a sample PDF content
                const pdfContent = '%PDF-1.3\n%����\n\n1 0 obj\n<<\n/Type /Catalog\n/Outlines 2 0 R\n/Pages 3 0 R\n>>\nendobj\n\n2 0 obj\n<<\n/Type /Outlines\n/Count 0\n>>\nendobj\n\n3 0 obj\n<<\n/Type /Pages\n/Count 1\n/Kids [ 4 0 R ]\n>>\nendobj\n\n4 0 obj\n<<\n/Type /Page\n/Parent 3 0 R\n/Resources <<\n/Font <<\n/F1 9 0 R \n>>\n/ProcSet 8 0 R\n>>\n/MediaBox [0 0 612.0000 792.0000]\n/Contents 5 0 R\n>>\nendobj\n\n5 0 obj\n<< /Length 1074 >>\nstream\n2 J\nBT\n0 0 0 rg\n/F1 0027 Tf\n57.3750 722.2800 Td\n( A Simple PDF File ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 688.6080 Td\n( This is a small demonstration .pdf file - ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 664.7040 Td\n( just for use in the Virtual Mechanics tutorials. More text. And more ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 652.7520 Td\n( text. And more text. And more text. And more text. ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 628.8480 Td\n( And more text. And more text. And more text. And more text. And more ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 616.8960 Td\n( text. And more text. Boring, zzzzz. And more text. And more text. And ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 604.9440 Td\n( more text. And more text. And more text. And more text. And more text. ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 592.9920 Td\n( And more text. And more text. ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 569.0880 Td\n( And more text. And more text. And more text. And more text. And more ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 557.1360 Td\n( text. And more text. And more text. Even more. Continued on page 2 ...) Tj\nET\nendstream\nendobj\n\n6 0 obj\n<<\n/Type /Page\n/Parent 3 0 R\n/Resources <<\n/Font <<\n/F1 9 0 R \n>>\n/ProcSet 8 0 R\n>>\n/MediaBox [0 0 612.0000 792.0000]\n/Contents 7 0 R\n>>\nendobj\n\n7 0 obj\n<< /Length 676 >>\nstream\n2 J\nBT\n0 0 0 rg\n/F1 0027 Tf\n57.3750 722.2800 Td\n( Simple PDF File 2 ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 688.6080 Td\n( ...continued from page 1. Yet more text. And more text. And more text. ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 676.6560 Td\n( And more text. And more text. And more text. And more text. And more ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 664.7040 Td\n( text. Oh, how boring typing this stuff. But not as boring as watching ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 652.7520 Td\n( paint dry. And more text. And more text. And more text. And more text. ) Tj\nET\nBT\n/F1 0010 Tf\n69.2500 640.8000 Td\n( Boring.  More, a little more text. The end, and just as well. ) Tj\nET\nendstream\nendobj\n\n8 0 obj\n[/PDF /Text]\nendobj\n\n9 0 obj\n<<\n/Type /Font\n/Subtype /Type1\n/Name /F1\n/BaseFont /Helvetica\n/Encoding /WinAnsiEncoding\n>>\nendobj\n\n10 0 obj\n<<\n/Creator (Rave \$$http://www.nevrona.com/rave\$$)\n/Producer (Nevrona Designs)\n/CreationDate (D:20060301072826)\n>>\nendobj\n\nxref\n0 11\n0000000000 65535 f\n0000000019 00000 n\n0000000093 00000 n\n0000000147 00000 n\n0000000222 00000 n\n0000000390 00000 n\n0000001522 00000 n\n0000001690 00000 n\n0000002423 00000 n\n0000002456 00000 n\n0000002574 00000 n\n\ntrailer\n<<\n/Size 11\n/Root 1 0 R\n/Info 10 0 R\n>>\n\nstartxref\n2714\n%%EOF\n';
                const blob = new Blob([pdfContent], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);

                // Create a temporary anchor element and trigger the download
                const a = document.createElement('a');
                a.href = url;
                a.download = 'resume.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                // Clean up the URL object
                URL.revokeObjectURL(url);

                // Reset button state
                downloadBtn.classList.remove('downloading');
                btnText.textContent = 'Download Resume';
            }, 3000); // Simulating a 3-second download time
        }
    });

    // Accessibility improvement: allow activation with Enter key
    downloadBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            downloadBtn.click();
        }
    });
});