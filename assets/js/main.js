window.addEventListener("scroll", function(){
  const header = document.getElementById("nav")
  const header_content = document.getElementById("nav-content")
  header.classList.toggle("sticky", window.scrollY > 0)
  header_content.classList.toggle("sticky-content", window.scrollY > 0)
})