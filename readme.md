windows8 tile menu
================================================

**How to use**

you need to include the scripts in ./js/ directory like
<pre>
&#60script src="js/jquery.js">&#60/script>
&#60script src="js/os.js">&#60/script>
</pre>

also for the user interface you need to include the stylesheet in ./css/ directory like
<pre>
	&#60link rel="stylesheet" href="css/os.css">
</pre>

**To create a tile**
All tiles come under the **div class="panel"** like
<pre>
	&#60div class="panels">
		&#60div class="sec half">
			&#60div>item 1 of the sample is nice</div>
			div>item 2 of the sample is nice</div>
			&#60div>item 3 of the sample is nice</div>
		&#60/div>
		&#60div class="sec half">
			&#60div>item 1 of the sample is nice</div>
			&#60div>item 2 of the sample is nice</div>
			&#60div>item 3 of the sample is nice</div>
		&#60/div>
	&#60/div>
</pre>

**explanation**
the one with **sec half** are half tiles and the **div** inside that tags are swapped time to time
similarly one with **sec full** form the full sized tiles

