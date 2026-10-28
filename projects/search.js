(function () {
    'use strict';

    var input = document.getElementById('project-search');
    var list = document.getElementById('project-list');
    var status = document.getElementById('search-status');
    var form = input ? input.form : null;

    if (!input || !list || !status) {
        return;
    }

    var items = Array.prototype.slice.call(list.children);

    // Lowercase and strip accents so "Genève" is found by "geneve".
    function normalize(text) {
        return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    // What each project can be found by: title, caption, summary, tags and
    // the optional hidden data-keywords. "View project" is left out on purpose.
    var searchable = items.map(function (item) {
        var parts = Array.prototype.map.call(
            item.querySelectorAll('.card-title, .project-caption, .card-desc, .project-tags li'),
            function (el) { return el.textContent; }
        );
        parts.push(item.getAttribute('data-keywords') || '');
        return normalize(parts.join(' '));
    });

    function update() {
        var query = input.value.trim();
        var terms = query ? normalize(query).split(/\s+/) : [];
        var shown = 0;

        items.forEach(function (item, i) {
            // Every word typed has to appear somewhere in the project.
            var match = terms.every(function (term) {
                return searchable[i].indexOf(term) !== -1;
            });
            item.hidden = !match;
            if (match) {
                shown++;
            }
        });

        if (!query) {
            status.textContent = '';
        } else if (shown === 0) {
            status.textContent = 'No projects match "' + query + '".';
        } else {
            status.textContent = shown + ' of ' + items.length + ' projects match.';
        }
    }

    input.addEventListener('input', update);
    input.addEventListener('search', update); // the clear (x) button in some browsers

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    }

    // Allows linking straight to a search, e.g. Projects.html?q=python
    var preset = new URLSearchParams(window.location.search).get('q');
    if (preset) {
        input.value = preset;
    }

    update();
})();