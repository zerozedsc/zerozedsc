// Fetch and load navbar content
fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("colorlib-aside").innerHTML = data;

    // Add click event listeners to navigation links
    document.querySelectorAll("a[data-nav-section]").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("data-nav-section");
        handleNavigation(sectionId);
      });
    });
  })
  .catch((error) => console.error("Error loading navbar:", error));

// animation related function
function runAnimateBox() {
  var i = 0;
  $(".animate-box").waypoint(
    function (direction) {
      if (direction === "down" && !$(this.element).hasClass("animated")) {
        i++;

        $(this.element).addClass("item-animate");
        setTimeout(function () {
          $("body .animate-box.item-animate").each(function (k) {
            var el = $(this);
            setTimeout(
              function () {
                var effect = el.data("animate-effect");
                if (effect === "fadeIn") {
                  el.addClass("fadeIn animated");
                } else if (effect === "fadeInLeft") {
                  el.addClass("fadeInLeft animated");
                } else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight animated");
                } else {
                  el.addClass("fadeInUp animated");
                }

                el.removeClass("item-animate");
              },
              k * 200,
              "easeInOutExpo"
            );
          });
        }, 100);
      }
    },
    { offset: "85%" }
  );
}
