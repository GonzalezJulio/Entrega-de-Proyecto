const contactFrom = document.getElementById('contact_from');
const userName = document.getElementById('userName');
const userSurname = document.getElementById('userSurname');
const userEmail = document.getElementById('userEmail');
const userSugerencias = document.getElementById('userSuggestions');


const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type':  'application/json'
        },
        body: JSON.stringify(body),
    }
    
    const response = await fetch(' https://api.emailjs.com/api/v1.0/email/send', settings);
    const data = await response.json();
    return data;
};

contactFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        service_id: 'service_aresden113',
        template_id: 'template_bm2s9vo',
        user_id: 'jJuWBc_3E-PPuGLqj',
        template_params: {
            'to_name' : userName.value,
            'from_name': userEmail.value,
            'message': userSugerencias.value,
        }
    };
    sendEmail(body);
})