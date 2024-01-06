document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["Software Developer", "FullStack Web Developer", "Data Analyst"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});

    // Progress bars
    $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });