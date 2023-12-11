
    var certificados = [
        {"Miguel AlejandroCervantes Zea-P60 - FUNDAMENTO-certificate.pdf", descripcion: "certificado de Linux essentials obtenido en el año 2022"},
        {"Miguel AlejandroCervantes Zea-CCNA RS ESSENTIA-certificate.pdf", descripcion: "certificado de Switching, Routing and Wireless Essentials obtenido en el año 2023"},
        {"Python_Essentials_1_Badge20230730-28-kwpti5.pdf", descripcion: "certificado de Python Essentials 1 obtenido en el año 2023"},
        {"Python_Essentials_2_Badge20230731-28-ghjx4s.pdf", descripcion: "certificado de Python Essentials 2 obtenido en el año 2023"},
        {"JavaScript_Essentials_1_Badge20230807-28-41bn52.pdf", descripcion: "certificado de JavaScript Essentials obtenido en el año 2023"},
    ];


    function mostrarCertificados() {
    var divCurriculum = document.getElementById('Curriculum de Miguel Alejandro Cervantes Zea');

    for (var i = 0; i < certificados.length; i++) {
        var titulo = document.createElement('h2');
        titulo.textContent = certificados[i].nombre;

        var descripcion = document.createElement('p');
        descripcion.textContent = certificados[i].descripcion;

        var pdf = document.createElement('embed');
        pdf.src = 'PDFs/' + certificados[i].nombre;
        pdf.type = 'application/pdf';
        pdf.width = '100%';
        pdf.height = '600px';

        divCurriculum.appendChild(titulo);
        divCurriculum.appendChild(descripcion);
        divCurriculum.appendChild(pdf);
    }
}

mostrarCertificados();