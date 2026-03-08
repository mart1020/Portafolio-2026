
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
      alert('¡Envio exitoso! Me contactaré con vos lo antes posible. Muchas gracias! :D');
      document.getElementById('contact-form').reset(); 
    }, (err) => {
      btn.innerText = 'Enviar Mensaje';
      alert('Error al enviar: ' + JSON.stringify(err));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const firstSection = document.querySelector('#sobre-mi');
    if (firstSection) {
        setTimeout(() => {
            firstSection.classList.add('active');
        }, 150); 
    }

   
    const observerOptions = {
        root: null,
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    
    const otherSections = document.querySelectorAll('.reveal:not(#sobre-mi)');
    otherSections.forEach(section => {
        observer.observe(section);
    });
});