windows8 tile menu
================================================

**How to use**

you need to include the scripts in ./js/ directory like
<pre>
<script src="js/jquery.js"></script>
<script src="js/os.js"></script>
</pre>

also for the user interface you need to include the stylesheet in ./css/ directory like
<pre>
	<link rel="stylesheet" href="css/os.css">
</pre>

**To create a tile**
All tiles come under the **div class="panel"** like
<pre>
	<div class="panels">
		<div class="sec half">
		<div>item 1 of the sample is nice</div>
		<div>item 2 of the sample is nice</div>
		<div>item 3 of the sample is nice</div>
	</div>
	<div class="sec half">
		<div>item 1 of the sample is nice</div>
		<div>item 2 of the sample is nice</div>
		<div>item 3 of the sample is nice</div>
	</div>
	</div>
</pre>

**explanation**
the one with **sec half** are half tiles and the **div** inside that tags are swapped time to time
similarly one with **sec full** form the full sized tiles

