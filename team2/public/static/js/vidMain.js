function addFullScreenOverlay(){
  $("#mep_0").prepend("<div id='fullscreen-overlay' style='z-index:1001' class='mejs-overlay mejs-layer'><div>" + document.getElementsByClassName("current")[0].textContent + "</div></div>");
}


function updateTitle(){
  document.getElementById("vidtitle").textContent = document.getElementsByClassName("current")[0].textContent;
  document.getElementById("fullscreen-overlay").textContent = document.getElementsByClassName("current")[0].textContent;
}
    var files = [   "1 What do you do as a teacher.m4v", 
                    "2 What skills have led you to this job that you are so passionate about.mp4",
                    "3 What makes you excited to come to work.mp4",
                    "4 Please explain a time when you experienced passion for your job.mp4",
                    "5 What are one or two things that you have done that make you most proud of your work.mp4",
                    "6 What are the things you love the most about your career.mp4",
                    "7 Tell me about a specific instance when you were fully absorbed in your work.mp4",
                    "8 Are there any other ways that your work is meaningful to you.mp4",
                    "9 What are some of your favorite things about being a teacher.mp4",
                    "10 What do you want to be remembered for in your line of work.mp4"
                    ];
    var files2 = [ "1 How do you identify with the definition of passion .m4v",
                   "2 What do you find to be the most important part of your job.m4v",
                   "3 What do you do as a special education teacher.m4v",
                   "4 What do you find most rewarding about your job .m4v",
                   "5 When do you feel passion in your work .m4v",
                   "6 When do you feel absorbed in your work .m4v",
                   "7 How is your job meaningful.m4v",
                   "8 When did you know you wanted to become a special education teacher.m4v"
                   ]
function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'));
}

<<<<<<< HEAD
function updateRank(choice) {
	var pname = window.location.href;
	console.log(pname);
	var socPos = pname.search(/[0-9][0-9]-[0-9][0-9][0-9][0-9]/);
	console.log(socPos);
    var soc = pname.substring(socPos, socPos+2).concat(pname.substring(socPos+2, socPos+7));
	console.log(soc);
	
	if (choice == "like"){
		$.get('/career/' + soc + '/vidup');
    } else if (choice == "neutral") {
		$.get('/career/' + soc + '/vidmid');
	} else if (choice == "dislike") {
		$.get('/career/' + soc + '/viddown');
	}
=======
function showNextCareerButton() {
    $('.upthumb').addClass("upthumb-selected");
  $('.upthumb').removeClass("upthumb");
  $('#next-career').show("fast");
>>>>>>> 18d75c1f865580c2cd2229a7826b5c605fe88164
}

function nextJob(choice){
    var person = getURLParameter('person');
  var vid1, vid2, vid3;

  

  console.log(vid1);
    if (choice == "like"){
    vid1 = handleVideoLike(req, res);
        window.location.href = '/career/' + vid1 + 'video/';
    } else if (choice == "neutral") {
    window.location.href = '/career/' + vid2 + 'video/';
  } else if (choice == "dislike") {
    window.location.href = '/career/' + vid3 + 'video/';
  }
}

var question_words = ["Who", "What", "Where", "Why", "When", "Is", "Are", "Were", "Will", "Would"];

//temporary code
    var curfiles = files;
    for (var i=0; i<curfiles.length; i++){
        // alert(files[i]);
        var before = document.getElementById("vidtag").innerHTML;
        // alert(before);
        var person = "Amy/" //getURLParameter('person') + '/';
        if (person == "Melody/")
            curfiles = files2;
        var filename = curfiles[i];
        var filename_no_number = filename.substring(filename.indexOf(' ') + 1);
        var filename_bare = filename_no_number.substring(0, filename_no_number.length - 4);
        var first_word = filename_bare.split(' ')[0];
        var query = "";
        if ($.inArray(first_word, question_words) != -1) {
          query = filename_bare + '?';
        }
        else {
          query = filename_bare + '.';
        }

        
        var after = before + "\n <source type='video/mp4' src='/static/P3Videos/Amy/" + curfiles[i] + "' title='" + query + "' data-poster='track2.png'>"
        document.getElementById("vidtag").innerHTML = after;
    }
    var person = getURLParameter('person');
    if (person == "Amy"){
        document.getElementById("jobtitle").innerHTML = "Middle School Teacher";
    } 
    else if (person == "Melody"){
        document.getElementById("jobtitle").innerHTML = "Special Education Teacher";
    }
