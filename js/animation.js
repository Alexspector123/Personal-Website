window.transitionToPage = function(href, target) {
    if (target === '_blank') {
        window.open(href, '_blank');
    } else {
        document.querySelector('body').style.opacity = 0;

        setTimeout(function() {
            window.location.href = href;
        }, 500);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').style.opacity = 1;
});