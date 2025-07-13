var collapsables = document.getElementsByClassName("collapsable-clicker");

Array.from(collapsables).forEach(collapsable => {
    collapsable.addEventListener("click", function() {
        var dropContent = this.nextElementSibling;
        var chevIndicator = this.lastElementChild;
        console.log(this.lastElementChild);
        if (dropContent.style.maxHeight) {
            dropContent.style.maxHeight = null;
            chevIndicator.style.rotate = "0deg"
        } else {
            dropContent.style.maxHeight = dropContent.scrollHeight + "px";
            chevIndicator.style.rotate = "90deg"
        }
    })
})

function jumpToContact() {
    document.getElementById("contact-dropper").click();
}