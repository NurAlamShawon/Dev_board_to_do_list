document
  .getElementById("completed_button1")
  .addEventListener("click", function (e) {
    e.preventDefault();
    remaining_task();
    total_complete();
    disable(document.getElementById("completed_button1"));
    add_paragraph(
      document.getElementById("history"),
      document.getElementById("button1_title")
    );
  });

document
  .getElementById("completed_button2")
  .addEventListener("click", function (e) {
    e.preventDefault();
    remaining_task();
    total_complete();
    disable(document.getElementById("completed_button2"));
    add_paragraph(
      document.getElementById("history"),
      document.getElementById("button2_title")
    );
  });

document
  .getElementById("completed_button3")
  .addEventListener("click", function (e) {
    e.preventDefault();
    remaining_task();
    total_complete();
    disable(document.getElementById("completed_button3"));
    add_paragraph(
      document.getElementById("history"),
      document.getElementById("button3_title")
    );
  });

document
  .getElementById("completed_button4")
  .addEventListener("click", function (e) {
    e.preventDefault();
    remaining_task();
    total_complete();
    disable(document.getElementById("completed_button4"));
    add_paragraph(
      document.getElementById("history"),
      document.getElementById("button4_title")
    );
  });

document
  .getElementById("completed_button5")
  .addEventListener("click", function (e) {
    e.preventDefault();
    remaining_task();
    total_complete();
    disable(document.getElementById("completed_button5"));
    add_paragraph(
      document.getElementById("history"),
      document.getElementById("button5_title")
    );
  });

document
  .getElementById("completed_button6")
  .addEventListener("click", function (e) {
    e.preventDefault();
    remaining_task();
    total_complete();
    disable(document.getElementById("completed_button6"));
    add_paragraph(
      document.getElementById("history"),
      document.getElementById("button6_title")
    );
  });

document.getElementById("clear").addEventListener("click", function (e) {
  e.preventDefault();
  delete_history();
});


document.getElementById("blog").addEventListener("click",function(e){
    e.preventDefault();
    window.location.href = "./blog.html";
});


document.getElementById("dynamic").addEventListener("click",function(e){
const random="#"+Math.floor(Math.random() * 16777215).toString(16);
document.getElementById("body").style.backgroundColor=random;


});