document.createElement('video');document.createElement('audio');document.createElement('track');
  	window.onload = function(e){
  		var player = videojs('blender', { /* Options */ }, function() {
  			//auto play
	    	this.play();
		});
		window.video_player = videojs('blender');
		// track state of interaction
		window.interaction_state = "idle";
    document.getElementById('menu_Start').style.display='block';
		setTimeout(callback, 1000);
  	}
	function play(){
		video_player.play();
	}
	function interrupt(){
		video_player.pause();
	}
	function stop(){
		video_player.currentTime(0);
	}
  	function callback(){
  		var time = video_player.currentTime();
  		var text = document.getElementById('annotation');
  		// video control
  		playback(time, interaction_state, text)
  		setTimeout(callback, 1000);
  	}
  	function playback(time, state, text)
  	{
  		console.log("Time: " + time + " State: " + state);
  		if (state === "idle" && time > 4)
  		{
  			video_player.currentTime(2);
  			text.innerHTML = "Idling";
  		} else if (state === "start" && time < 6)
  		{
  			video_player.currentTime(21);
  			text.innerHTML = "Starting & Adding Ice";
        document.getElementById('menu_Start').style.display='none';
  		} else if (state === "start" && time > 23)
  		{
  			video_player.currentTime(21);
  			text.innerHTML = "Idling with Ice";
        document.getElementById('menu_addFruit').style.display='block';
  		} else if (state === "addOrange" && time < 24)
  		{
  			video_player.currentTime(31);
  			text.innerHTML = "Adding Orange to Ice";
        document.getElementById('menu_addFruit').style.display='none';
  		} else if (state === "addOrange" && time > 33)
  		{
  			video_player.currentTime(31);
  			text.innerHTML = "Idling with Orange & Ice";
        document.getElementById('menu_addBanana').style.display='block';
        document.getElementById('menu_blendOrange').style.display='block';
  		} else if (state === "blendOrange" && time < 34)
  		{
  			video_player.currentTime(44);
  			text.innerHTML = "Preparing & Blending Orange";
        document.getElementById('menu_addBanana').style.display='none';
        document.getElementById('menu_blendOrange').style.display='none';
  		} else if (state === "blendOrange" && time > 56)
  		{
  			video_player.currentTime(54);
  			text.innerHTML = "Idling with Blended Orange";
        document.getElementById('menu_pourOrange').style.display='block';
  		} else if (state === "pourOrange" && time < 58)
  		{
  			video_player.currentTime(80);
  			text.innerHTML = "Preparing & Pouring Blended Orange";
        document.getElementById('menu_pourOrange').style.display='none';
  		} else if (state === "pourOrange" && time > 81)
  		{
  			video_player.currentTime(80);
  			text.innerHTML = "Idling with Poured Orange";
        document.getElementById('menu_showOrange').style.display='block';
  		} else if (state === "showOrange" && time < 83)
  		{
  			video_player.currentTime(83);
  			text.innerHTML = "Showing blended Orange";
        document.getElementById('menu_showOrange').style.display='none';
  		} else if (state === "showOrange" && time > 90)
  		{
  			video_player.pause();
  			text.innerHTML = "Showed blended Orange";
        // insert reset
        document.getElementById('menu_reset').style.display='block';
  		} else if (state === "orangeAddBanana" && time < 92)
      {
        video_player.currentTime(96.5);
        text.innerHTML = "Adding Banana to Orange";
        document.getElementById('menu_addBanana').style.display='none';
        document.getElementById('menu_blendOrange').style.display='none';
      } else if (state === "orangeAddBanana" && time > 98)
      {
        video_player.currentTime(96.5);
        text.innerHTML = "Idling with Banana added to Orange";
        document.getElementById('menu_blendOrangeBanana').style.display='block';
      } else if (state === "blendOrangeBanana" && time < 100)
      {
        video_player.currentTime(108);
        text.innerHTML = "Blending Banana added to Orange";
        document.getElementById('menu_blendOrangeBanana').style.display='none';
      } else if (state === "blendOrangeBanana" && time > 120)
      {
        video_player.currentTime(118);
        text.innerHTML = "Idling with Blended Banana added to Orange";
        document.getElementById('menu_pourOrangeBanana').style.display='block';
      } else if (state === "pourOrangeBanana" && time < 122)
      {
        video_player.currentTime(141.2);
        text.innerHTML = "Preparing & pouring blended Banana added to Orange";
        document.getElementById('menu_pourOrangeBanana').style.display='none';
      } else if (state === "pourOrangeBanana" && time > 142)
      {
        video_player.currentTime(141.2);
        text.innerHTML = "Idling with poured blended Banana added to Orange";
        document.getElementById('menu_showOrangeBanana').style.display='block';
      } else if (state === "showOrangeBanana" && time < 143.5)
      {
        video_player.currentTime(143.5);
        text.innerHTML = "Showing blended Banana added to Orange";
        document.getElementById('menu_showOrangeBanana').style.display='none';
      } else if (state === "showOrangeBanana" && time > 149)
      {
        video_player.pause();
        text.innerHTML = "Showed blended Banana added to Orange";
        // insert reset
        document.getElementById('menu_reset').style.display='block';
      } else if (state === "addBanana" && time < 150)
      {
        video_player.currentTime(156);
        text.innerHTML = "Preparing & Adding Banana";
        document.getElementById('menu_addFruit').style.display='none';
      } else if (state === "addBanana" && time > 158)
      {
        video_player.currentTime(156);
        text.innerHTML = "Idling with added Banana";
        document.getElementById('menu_addOrange').style.display='block';
        document.getElementById('menu_blendBanana').style.display='block';
      } else if (state === "blendBanana" && time < 159)
      {
        video_player.currentTime(166.5);
        text.innerHTML = "Preparing & Blending Banana";
        document.getElementById('menu_addOrange').style.display='none';
        document.getElementById('menu_blendBanana').style.display='none';
      } else if (state === "blendBanana" && time > 180)
      {
        video_player.currentTime(178);
        text.innerHTML = "Idling with blended Banana";
        document.getElementById('menu_pourBanana').style.display='block';
      } else if (state === "pourBanana" && time < 182)
      {
        video_player.currentTime(205);
        text.innerHTML = "Preparing & pouring blended Banana";
        document.getElementById('menu_pourBanana').style.display='none';
      } else if (state === "pourBanana" && time > 207)
      {
        video_player.currentTime(205);
        text.innerHTML = "Idling with poured blended Banana";
        document.getElementById('menu_showBanana').style.display='block';
      } else if (state === "showBanana" && time < 208)
      {
        video_player.currentTime(208);
        text.innerHTML = "Showing blended Banana";
        document.getElementById('menu_showBanana').style.display='none';
      } else if (state === "showBanana" && time > 217)
      {
        video_player.pause();
        text.innerHTML = "Showed blended Banana";
        // insert reset
        document.getElementById('menu_reset').style.display='block';
      } else if (state === "bananaAddOrange" && time < 219)
      {
        video_player.currentTime(223);
        text.innerHTML = "Adding Orange to Banana";
        document.getElementById('menu_addOrange').style.display='none';
        document.getElementById('menu_blendBanana').style.display='none';
      } else if (state === "bananaAddOrange" && time > 225)
      {
        video_player.currentTime(223);
        text.innerHTML = "Idlng with Orange to added Banana";
        document.getElementById('menu_blendBananaOrange').style.display='block';
      } else if (state ==="blendBananaOrange" && time < 227)
      {
        video_player.currentTime(233);
        text.innerHTML = "Blending Orange added to Banana";
        document.getElementById('menu_blendBananaOrange').style.display='none';
      } else if (state ==="blendBananaOrange" && time > 239)
      {
        interaction_state = "blendOrangeBanana";
        video_player.currentTime(114);
        text.innerHTML = "Blending Orange added to Banana";
      }

  	}
  	// Interactive control functions
  	function start()
  	{
  		interaction_state = "start";
  	}
  	function empty_addOrange()
  	{
  		interaction_state = "addOrange";
  	}
  	function blend_Orange()
  	{
  		interaction_state = "blendOrange";
  	}
  	function pour_Orange()
  	{
  		interaction_state = "pourOrange";
  	}
  	function show_Orange()
  	{
  		interaction_state = "showOrange";
  	}
    function orange_addBanana()
    {
      interaction_state = "orangeAddBanana";
    }
    function blend_OrangeBanana()
    {
      interaction_state = "blendOrangeBanana";
    }
    function pour_OrangeBanana()
    {
      interaction_state = "pourOrangeBanana";
    }
    function show_OrangeBanana()
    {
      interaction_state = "showOrangeBanana"; 
    }
    function empty_addBanana()
    {
      interaction_state = "addBanana";
    }
    function blend_Banana()
    {
      interaction_state = "blendBanana";
    }
    function pour_Banana()
    {
      interaction_state = "pourBanana";
    }
    function show_Banana()
    {
      interaction_state = "showBanana";
    }
    function banana_addOrange()
    {
      interaction_state = "bananaAddOrange";
    }
    function blend_BananaOrange()
    {
      interaction_state = "blendBananaOrange";
    }
    function video_reset()
    {
      interaction_state = "idle";
      video_player.currentTime(2);
      video_player.play();
      document.getElementById('menu_reset').style.display='none';
      document.getElementById('menu_Start').style.display='block';
    }