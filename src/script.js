// 1. Close mobile menu on href click
const closeMobileMenu = () => {
  // For each <a> in the mobile menu and add an event listener
  Array.from(document.getElementsByClassName("closeMobileMenu")).forEach(
    (element) =>
      element.addEventListener("click", function () {
        // Uncheck mobileMenuCheckbox - this will close mobile menu
        document.getElementById("mobileMenuCheckbox").checked = false;
      })
  );
};

closeMobileMenu();
