
	function color()
	{
	
		let c = Math.round( 255.0 * Math.random() );
	
		return 'rgb(' + c + ', ' + c + ', ' + c + ');';
	
	}

	document.addEventListener('DOMContentLoaded', function(){
	
		let videos = document.getElementsByClassName('vidos'),
			links = document.getElementsByClassName('strelka'),
			blocks = document.getElementsByClassName('icons-s');

		links[0].onclick = function(e)
		{

			videos[0].pause();
		
			let target = e.target.parentElement.id;

			if ( target == 'set_prev_video' )
				videos[0].setAttribute('src', '111.mp4');
			else if ( target == 'set_next_video' )
				videos[0].setAttribute('src', '222.mp4');
			
			videos[0].play();
			
		}
		
		blocks[0].onclick = function(e)
		{

			if ( e.target.tagName != 'LI' )
				e.target.parentElement.setAttribute('style', 'font-size:25px;width:100%;display:block;background:' + color());
			else
				e.target.setAttribute('style', 'font-size:25px;width:100%;display:block;background:' + color());
				
			blocks[0].className = 'icons-s icons-s-new';
			
		}
	
	});
