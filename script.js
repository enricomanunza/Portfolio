// File Browser functionality
document.getElementById('file-input').addEventListener('change', function(event) {
    const files = event.target.files;
    const fileList = document.getElementById('file-list');
    
    if (files.length === 0) {
        fileList.innerHTML = '<p>Nessun file selezionato</p>';
        return;
    }
    
    let fileHTML = '<ul>';
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
        fileHTML += `<li><strong>${file.name}</strong> - ${sizeMB} MB - ${file.type || 'Unknown type'}</li>`;
    }
    
    fileHTML += '</ul>';
    fileList.innerHTML = fileHTML;
});

// PDF Viewer functionality
function loadPDF(pdfURL) {
    const pdfFrame = document.getElementById('pdf-frame');
    if (pdfURL) {
        pdfFrame.src = pdfURL;
    } else {
        pdfFrame.src = '';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
    
    // Uncomment the next line to load a default PDF
    // loadPDF('https://example.com/your-pdf-file.pdf');
};