Element.prototype.remove = function() {
this.parentElement.removeChild(this);
}
//Change style through buttons
function changeStyle(selectedStyle) {
    document.getElementById('ArticleCss').remove();
    cssFile = document.createElement('link');
    cssFile.type = "text/css"; 
    cssFile.rel = "stylesheet";
    cssFile.href = selectedStyle;
    cssFile.id= "ArticleCss";
    document.getElementsByTagName("head")[0].appendChild(cssFile);
}

//Manage active style button
$(document).ready(function(){

    $("#reset").click(function(){
        $('#btn-style>button.btn-active').removeClass("btn-active");
        this.classList.add("btn-active");
  });
    $("#aldine").click(function(){
        $('#btn-style>button.btn-active').removeClass("btn-active");
        this.classList.add("btn-active");
  });
    $("#hiphop").click(function(){
        $('#btn-style>button.btn-active').removeClass("btn-active");
        this.classList.add("btn-active");
  });
    $("#cubism").click(function(){
        $('#btn-style>button.btn-active').removeClass("btn-active");
        this.classList.add("btn-active");
  });
    $("#hippie").click(function(){
        $('#btn-style>button.btn-active').removeClass("btn-active");
        this.classList.add("btn-active");
  });
    $("#victorian").click(function(){
        $('#btn-style>button.btn-active').removeClass("btn-active");
        this.classList.add("btn-active");
  });
    $("#accessible").click(function(){
        $('#btn-style>button.btn-active').removeClass("btn-active");
        this.classList.add("btn-active");
  });
});