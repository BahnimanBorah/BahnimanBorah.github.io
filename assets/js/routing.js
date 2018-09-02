latestblog();
 function latestblog() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("blog").innerHTML +=
        this.responseText;
      }
    };
    xhttp.open("GET", "pages/todaysblog.html", true);
    xhttp.send();
  }
  
  function contact() {
    document.getElementById('contactSection').scrollIntoView();
  }

  function projects() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "pages/liveprojects.html", true);
    xhttp.send();
    document.getElementById('blog').style.display="none";
  }
