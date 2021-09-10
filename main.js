const ratio = 0.1;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry){

        if(entry.intersectionRatio > ratio){
            
            entry.target.classList.add("visible")
            observer.unobserve(entry.target);
        }
    })
}


window.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll(".reveal").forEach(function (r){
    observer.observe(r);
})
})



