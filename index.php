<!Doctype html>
<html>

<?php include 'includes/head.php' ?>

<body>
	<div id='container'>
            <?php 
                  $page = $_GET['page'];
                  if ($page == "home" OR $page == ""){
                      include_once ('includes/home.php');
                  } elseif (file_exists($page.'.php')) {
                      include($page.'.php');
                  } elseif (!file_exists($page.'.php')) {
                      include('404.html');
                  } else {
                      include('includes/home.php');
                  }
            ?> 
	</div> <!-- END CONTAINER -->

	<?php include_once 'includes/footer.php' ?>

      <!-- JS Code -->
      <script type="text/javascript" src="js/main.js"></script>


      <!-- GOOGLE ANALYTICS -->
      <script type="text/javascript">

        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-38737773-1']);
        _gaq.push(['_trackPageview']);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
      </script>

</body>
</html>