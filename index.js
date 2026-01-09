const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark"); 
    navbar.classList.toggle("active");
};

const typed1 = new Typed('.multiple-roles',{
  strings: ['Frontend Developer','Machine Learning Enthusiast','CS Student'],
  typeSpeed: 100,
  backSpeed:100,
  backdelay: 1000,
  loop:true
});
const typed2 = new Typed('.multiple-texts',{
  strings: ['Frontend Developer','Machine Learning Enthusiast','CS Student'],
  typeSpeed: 100,
  backSpeed:100,
  backdelay: 1000,
  loop:true
});

ScrollReveal({
  reset:true,
  distance: "80px",
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content,.heading, ', {origin:'top'});
ScrollReveal().reveal('.home-img,.skills-container,.projects-box,.contact form,.certifications-container', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content', {origin:'right'});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const subjectInput = document.getElementById("subject").value || "Portfolio Contact Message";
    const message = document.getElementById("message").value;
    alert(`Thanks ${name}! Your Message will be send via Gmail.`);
    const mailTo = "irfankhan016104@gmail.com";
    const mailSubject = encodeURIComponent(subjectInput);
    const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${mailTo}&su=${mailSubject}&body=${mailBody}`, "_blank");
    this.reset();
});




