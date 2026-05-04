document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".menu a").forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    const contactForm = document.getElementById("contactForm");
    const result = document.getElementById("resultado");

    if (contactForm && result) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const apellido = document.getElementById("apellido").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (!nombre || !apellido || !email || !mensaje) {
                result.textContent = "Por favor completa todos los campos antes de enviar.";
                return;
            }

            const texto = [
                "Hola Ivonne, me interesa recibir asesoria para una obra vial.",
                "",
                `Nombre: ${nombre} ${apellido}`,
                `Email: ${email}`,
                `Mensaje: ${mensaje}`
            ].join("\n");

            const whatsappUrl = `https://wa.me/56982346061?text=${encodeURIComponent(texto)}`;
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");

            result.textContent = "Tu mensaje esta listo en WhatsApp. Solo confirma el envio.";
            contactForm.reset();
        });
    }
});
