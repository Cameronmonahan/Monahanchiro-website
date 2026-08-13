document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Lead capture form: no backend is connected yet, so this opens a
  // pre-filled email to the practice as a working placeholder.
  // Swap this for a real form service (e.g. Formspree, JaneApp, your
  // scheduling tool) when you're ready to collect leads automatically.
  var leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('fullName').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var subject = encodeURIComponent('New patient inquiry from ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone
      );
      window.location.href = 'mailto:mlmdc1@yahoo.com?subject=' + subject + '&body=' + body;
    });
  }
});
