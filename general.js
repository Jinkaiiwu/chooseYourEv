const pageStage = 1;
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const submit = document.getElementById('submitButton');
const viewer = document.getElementById('viewer');
const questions = document.getElementById('dialogue');
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 

questions.style.display='none';
// when video ends
function onYouTubeIframeAPIReady() {
        player = new YT.Player('YT', {
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
		});
}

function onPlayerReady(event) {
		
        event.target.playVideo();
      }
	
function onPlayerStateChange(event) {
        if (event.data == 0) {
          	questions.style.display='block';
			console.log(event.data);
        }
      };

quizForm.addEventListener('submit', function(event) {
	submit.style.display = 'block';
	event.preventDefault(); // prevent form submission

	// Get the values of each question
	const q1 = Number(document.querySelector('input[name="q1"]:checked').value);
	const q2 = Number(document.querySelector('input[name="q2"]:checked').value);
	const q3 = Number(document.querySelector('input[name="q3"]:checked').value);

	// Display the result
	if(q1==0){
		if(q2<=1){
			if(q3<=1){
				resultDiv.innerHTML = `<p id="rideSug"><a href="vrideSCOOTER.html">Try a virtual test ride on our Scooters!</a>
					<a style = "margin-left: 2em" href="scooterSpecs.html" target="_blank">What are the Specs?</a></p>`;
				viewer.style.top = '25%';
				viewer.style.transform = 'translate(-50%,-25%)';
				questions.style.bottom = '10%';
				submit.style.display = 'none';
				quizForm.style.display = 'none';
				viewer.innerHTML = '<iframe width="1080" height="625" src="https://www.youtube.com/embed/Pmn424LDG9U?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
			}else{
				resultDiv.innerHTML = `<p id="rideSug"><a href="vrideSUPER.html">Try a virtual test ride on our Super!</a>
					<a style = "margin-left: 2em" href="superSpecs.html" target="_blank">What are the Specs?</a></p>`;
				viewer.style.top = '25%';
				viewer.style.transform = 'translate(-50%,-25%)';
				questions.style.bottom = '10%';
				submit.style.display = 'none';
				quizForm.style.display = 'none';
				viewer.innerHTML = '<iframe width="1080" height="625" src="https://www.youtube.com/embed/iM1Z69d4z3k?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
			}
		}else if(q2==2){
				resultDiv.innerHTML = `<p id="rideSug"><a href="vrideONYX.html">Try a virtual test ride on our ONYX!</a>
					<a style = "margin-left: 2em" href="onyxSpecs.html" target="_blank">Tell me the SPECS before I test ride!</a></p>`;
				viewer.style.top = '25%';
				viewer.style.transform = 'translate(-50%,-25%)';
				questions.style.bottom = '10%';
				submit.style.display = 'none';
				quizForm.style.display = 'none';
				viewer.innerHTML = '<iframe width="1080" height="625" src="https://www.youtube.com/embed/fn_WQRdtZ2w?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}
	}else{
		if(q2<=1){
			if(q3<=1){
				resultDiv.innerHTML = `<p id="rideSug"><a href="vrideBOARD.html">Try a virtual test ride on our Evolve Boards!</a>
					<a style = "margin-left: 2em" href="boardSpecs.html" target="_blank">What are the Specs?</a></p>`;
				viewer.style.top = '25%';
				viewer.style.transform = 'translate(-50%,-25%)';
				questions.style.bottom = '10%';
				submit.style.display = 'none';
				quizForm.style.display = 'none';
				viewer.innerHTML = '<iframe width="1080" height="625" src="https://www.youtube.com/embed/tZ81QVbQ008?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
			}else{
				resultDiv.innerHTML = `<p id="rideSug"><a href="vrideSUPER.html">Try a virtual test ride on our Super!</a>
					<a style = "margin-left: 2em" href="superSpecs.html" target="_blank">What are the Specs?</a></p>`;
				viewer.style.top = '25%';
				viewer.style.transform = 'translate(-50%,-25%)';
				questions.style.bottom = '10%';
				submit.style.display = 'none';
				quizForm.style.display = 'none';
				viewer.innerHTML = '<iframe width="1080" height="625" src="https://www.youtube.com/embed/iM1Z69d4z3k?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
			}
		}else if(q2==2){
				resultDiv.innerHTML = `<p id="rideSug"><a href="vrideONYX.html">Try a virtual test ride on our ONYX!</a>
					<a style = "margin-left: 2em" href="onyxSpecs.html" target="_blank">What are the Specs?</a></p>`;
				viewer.style.top = '25%';
				viewer.style.transform = 'translate(-50%,-25%)';
				questions.style.bottom = '10%';
				submit.style.display = 'none';
				quizForm.style.display = 'none';
				viewer.innerHTML = '<iframe width="1080" height="625" src="https://www.youtube.com/embed/fn_WQRdtZ2w?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}
	}
});

