    // Lista de tus certificados en PDF
    var certificados = [
        "Miguel AlejandroCervantes Zea-P60 - FUNDAMENTO-certificate.pdf",
        "Python_Essentials_1_Badge20230730-28-kwpti5.pdf",
        "Python_Essentials_2_Badge20230731-28-ghjx4s.pdf",
        "JavaScript_Essentials_1_Badge20230807-28-41bn52.pdf",
        "Miguel AlejandroCervantes Zea-CCNA RS ESSENTIA-certificate.pdf"
    ];

    // Función para mostrar los certificados
    function mostrarCertificados() {
        var divCurriculum = document.getElementById('Curriculum de Miguel Alejandro Cervantes Zea');

        for (var i = 0; i < certificados.length; i++) {
            var titulo = document.createElement('h2');
            titulo.textContent = certificados[i];

            var pdf = document.createElement('embed');
            pdf.src = 'PDFs/' + certificados[i];
            pdf.type = 'application/pdf';
            pdf.width = '100%';
            pdf.height = '600px';

            divCurriculum.appendChild(titulo);
            divCurriculum.appendChild(pdf);
        }
    }

    // Llamada a la función para mostrar los certificados
    mostrarCertificados();