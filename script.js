document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            
            const email = document.getElementById('user-email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // En este punto podrías usar una API para enviar el correo.
            // Como ejemplo simple, simulamos la redirección mailto:
            const mailtoLink = `mailto:martinezromina@outlook.com.ar?subject=${encodeURIComponent(subject)}&body=De: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
            
            window.location.href = mailtoLink;
        });
    }

    // Aquí puedes agregar efectos de scroll o animaciones más adelante
    console.log("Portafolio cargado correctamente.");
});

const btn = document.getElementById('button-send');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = 'Enviando...';

   const serviceID = 'service_87azjge';
   const templateID = 'template_fswgvpa'; 

   
   const params = {
       user_email: document.getElementById('user_email').value,
       subject: document.getElementById('subject').value,
       message: document.getElementById('message').value
   };

   emailjs.send(serviceID, templateID, params)
    .then(() => {
      btn.innerText = 'Enviar Mensaje';
      alert('¡Mensaje enviado con éxito!');
      document.getElementById('contact-form').reset(); 
    }, (err) => {
      btn.innerText = 'Enviar Mensaje';
      alert('Error al enviar: ' + JSON.stringify(err));
    });
});