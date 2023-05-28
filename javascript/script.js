let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle('active');
  let clsName = document.getElementById('menu-icon').className;
  if (clsName.includes('menu')) {
    document.getElementById('menu-icon').className = 'bx bx-x';
  } else {
    document.getElementById('menu-icon').className = 'bx bx-menu';
  }
};

window.onscroll = () => {
  navbar.classList.remove('active');
  //scroll progress bar
  pageScroll();
  scrollFunction();
};

// Dark Mode / light mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
  if (darkmode.classList.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
  }
};

//mail
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var subject = 'Contact Form Submission';
  var body = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;

  var mailtoLink =
    'mailto:parajulisandesh578@gmail.com?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body);

  window.location.href = mailtoLink;
});

//scrollToTop
// window.onscroll = function () {

// };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scrollToTopBtn').style.display = 'block';
  } else {
    document.getElementById('scrollToTopBtn').style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//document title change
let docTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Come back 😒';
});

window.addEventListener('focus', () => {
  document.title = docTitle;
});

function pageScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('proBar').style.width = scrolled + '%';
}
