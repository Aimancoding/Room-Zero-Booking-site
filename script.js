/// Single-page navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            // Only handle internal section navigation
            e.preventDefault();
            const targetId = href.substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
            });
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.add('active');

            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        }
        // Otherwise, let the browser navigate to another page
    });
});

    // Booking modal
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.close');
    const bookBtns = document.querySelectorAll('.book-btn');
    const form = document.getElementById('booking-form');
    const successMsg = document.getElementById('success-message');
    const modalTitle = document.getElementById('modal-title');
    // Open booking modal from NAV "Book Now"
    const navBook = document.getElementById('open-booking');
    if (navBook) {
        navBook.addEventListener('click', function(e) {
        e.preventDefault();
        modalTitle.textContent = "Room: Select a Room First";
        modal.style.display = "block";
        form.style.display = "flex";
        successMsg.classList.add("hidden");
    });
}

    bookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const roomName = this.parentElement.getAttribute('data-room');
            modalTitle.textContent = `Room: ${roomName}`;
            modal.style.display = 'block';
            form.style.display = 'flex';
            successMsg.classList.add('hidden');
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const email = document.getElementById('email').value;
        console.log(`Booking for ${modalTitle.textContent}: Date: ${date}, Time: ${time}, Email: ${email}`);
        form.style.display = 'none';
        successMsg.classList.remove('hidden');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    });
});


