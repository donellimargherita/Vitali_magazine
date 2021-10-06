//Change style through buttons
function changeStyle(selectedStyle) {
    document.getElementById('ArticleCss').remove();
    document.getElementById('loading').style.display = 'block';
    cssFile = document.createElement('link');
    cssFile.type = "text/css"; 
    cssFile.rel = "stylesheet";
    cssFile.onload = function(){ setTimeout(function() {document.getElementById('loading').style.display = 'none';}, 2400) };
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