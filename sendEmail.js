function sendEmail(receivedEmail, receivedSubject, receivedBody) {
    // Tu código aquí 👈

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (receivedEmail.length && receivedSubject.length && receivedBody.length > 0) {
                resolve({ email: receivedEmail, subject: receivedSubject, body: receivedBody });
            } else {
                reject(new Error("Hacen falta campos para enviar el email"));
            }
        }, 2000);
    });
    return promise;
}

sendEmail(
    "test@mail.com",
    "",
    "Únete a los 30 días de JS",
)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))