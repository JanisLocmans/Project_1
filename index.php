<DOCTYPE HTML>

	<html>

		<head>
			 <link href="style.css" rel="stylesheet" type="text/css">
			 <script type="text/javascript" src="nav.js"></script>
			 <script type="text/javascript" src="slider_class.js"></script>
			 

			<!-- SLIDER SCRIPT !!!!!!!! START-->

			 <script type="text/javascript">
			

			// TODO: Remove Hardcoded Paths!

			var pics = [
			'Slider_Pics/pic1.jpg',
			'Slider_Pics/pic2.jpg',
			'Slider_Pics/pic3.jpg'
			];	

			window.onload = function () {
				var element = document.getElementById("slider");
				var element2 = document.getElementById("js_slider_id");
				var Class = new Slider(element);
				
				Class.create();
				

				//generate pics from array ( pics )
				for(var x =0;x<3;x++)
				{
					   var img = new Image();
           				   img.src = pics[x];
           					document.getElementById("js_slider_id").appendChild(img);
				}
			}

			 </script>

			<style>
			
			.js_slider_mask {
				margin: 0;
				background: grey;
				float:left;
			}
			#js_slider_id img{
				width: 1250px;
				height: 450px;

			}
			</style>

				<!-- SLIDER SCRIPT !!!!!!!! END-->
		</head>
	
		<body>
				<div class="content">

					<header class="front_main_header">
					</header>

						<div id="slider" class="slider_container">
						

						</div>

						<div class="redir_menu_cont">

							<div class="select_box" onclick="location.href='advert.php';">
							</div>

							<div class="select_box">
							</div>

							<div class="select_box">
							</div>

							<div class="select_box">
							</div>

						</div>

					<footer class = "main_footer">

					</footer>

				</div>

		</body>

</html>