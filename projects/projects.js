(function () {
    'use strict';

    var body = document.body;
    var page = body.getAttribute('data-page') || '';

    function current(key) {
        return page === key ? ' aria-current="page"' : '';
    }

    var nav =
        '<a class="skip" href="#content">Skip to content</a>' +
        '<nav class="nav" aria-label="Main">' +
            '<a href="../index.html" class="logo">' +
                '<img src="../img/ShubhLogo.jpg" class="img1" alt="Shubham Gusain, home" width="56" height="56">' +
            '</a>' +
            '<ul class="menu">' +
                '<li><a href="../index.html"' + current('home') + '>Home</a></li>' +
                '<li><a href="../Portfolio.html"' + current('portfolio') + '>Portfolio</a></li>' +
                '<li><a href="../Personal.html"' + current('personal') + '>Personal</a></li>' +
            '</ul>' +
            '<a href="../Contact.html" class="contact-link"' + current('contact') + '>Contact<span class="hide-sm"> Me</span></a>' +
        '</nav>';

    var year = new Date().getFullYear();

    var footer =
        '<footer class="footer">' +
            '<div class="footer-inner">' +
                '<div>' +
                    '<p class="footer-name">Shubham Gusain</p>' +
                    '<p>MSc Computer Science: Data Science<br>Universiteit Leiden</p>' +
                    '<p>Leiden, NL</p>' +
                '</div>' +
                '<div>' +
                    '<p class="footer-head">Pages</p>' +
                    '<ul>' +
                        '<li><a class="list1" href="../index.html">Home</a></li>' +
                        '<li><a class="list1" href="../Portfolio.html">Portfolio</a></li>' +
                        '<li><a class="list1" href="../Personal.html">Personal</a></li>' +
                        '<li><a class="list1" href="../Contact.html">Contact</a></li>' +
                    '</ul>' +
                '</div>' +
                '<div>' +
                    '<p class="footer-head">Get in touch</p>' +
                    '<ul>' +
                        '<li><a class="list1" href="mailto:shubhamgusain2112@gmail.com">Email</a></li>' +
                        '<li><a class="list1" href="https://www.linkedin.com/in/shubhamgusain" target="_blank" rel="noopener">LinkedIn</a></li>' +
                        '<li><a class="list1" href="https://forms.gle/UpFvYyZ2f5PoKFK7A" target="_blank" rel="noopener">Contact form</a></li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
            '<p class="footer-copy">&copy; ' + year + ' Shubham Gusain &middot; <a class="list1" href="#top">Back to top</a></p>' +
        '</footer>';

    body.insertAdjacentHTML('afterbegin', nav);
    body.insertAdjacentHTML('beforeend', footer);

    document.addEventListener('click', function (e) {
        var link = e.target.closest ? e.target.closest('a[href="#"]') : null;
        if (link) {
            e.preventDefault();
        }
    });
})();