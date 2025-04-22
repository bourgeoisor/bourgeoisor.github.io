var now = new Date();

function hour() {
  if (now.getHours().toString().length < 2) {
    return "0" + now.getHours();
  } else {
    return now.getHours();
  }
}

function minute() {
  if (now.getMinutes().toString().length < 2) {
    return "0" + now.getMinutes();
  } else {
    return now.getMinutes();
  }
}

var time = document.getElementById("js-time");
time.innerHTML = hour() + ":" + minute();

var box = document.getElementById("js-search-text");
var urlPattern = /^(https?:\/\/)?[^ ]+[.][^ ]+([.][^ ]+)*(\/[^ ]+)?$/i;

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    parseCmd(box.value);
  }
}

function nav(cmd) {
  if (/^(?:(?:https?|ftp):\/\/).*/i.test(cmd)) {
    document.location.href = encodeURI(cmd);
  } else {
    document.location.href = "http://" + encodeURI(cmd);
    console.log(cmd);
  }
}

function search(cmd) {
  window.location.href = "https://duckduckgo.com/?&atb=v5&q=" + encodeURIComponent(cmd);
}

var alias = {
  "ab": "animebytes.tv",
  "btn": "broadcasthe.net",
  "fb": "facebook.com",
  "gh": "github.com",
  "li": "linkedin.com",
  "moodle": "moodle.mta.ca",
  "nyaa": "nyaa.eu",
  "plex": "plex.tv/web",
  "ptp": "passthepopcorn.me",
  "wcd": "what.cd",
  "yt": "youtube.com",
}

function parseCmd(cmd) {
  if (cmd == "bk") {
    document.location.href = "bkmks/"
  }

  else if (cmd in alias) {
    nav(alias[cmd]);
  }

  else if (urlPattern.test(cmd)) {
    nav(cmd);
  }

  else {
    search(cmd);
  }
}
