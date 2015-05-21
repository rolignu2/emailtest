<!DOCTYPE HTML>

<html>
	<head>
		<title>Escape Velocity by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/css/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie/v8.css" /><![endif]-->
		<!--[if lte IE 8]><script src="assets/css/ie/respond.min.js"></script><![endif]-->
	</head>
	<body class="homepage">
            <input type="hidden" value="0" id="reject_txt" />
		<div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper" class="wrapper">
					<div id="header">

						<!-- Logo -->
							<div id="logo">
								<h1><a href="index.html">E-MAIL TEST (BY EL CHELE)</a></h1>
								<p>Developer By Rolando Arriaza</p>
							</div>

						<!-- Nav -->
							

					</div>
				</div>

			<!-- Intro -->
				<div id="intro-wrapper" class="wrapper style1">
                                    <div class="title">
                                         Comencemos !!!
                                    </div>
					<section id="intro" class="container">
                                            <form method="post" action="#">
                                               <div class="12u">
							<textarea name="message" id="txt_emails" placeholder="Correos electronicos separados por comas (,)" rows="4"></textarea>
						</div>
                                               </form>
                                            
						<p class="style1">Una vez le des click este proceso comenzara y no hay regreso</p>
                                                <p class="style3" id="txt_analizar" name="txt_cantidad">
                                                     Correos a analizar : 0
						</p>
                                                <p class="style3" id="txt_procesados" name="txt_procesados">
                                                     Correos Procesados : 0
						</p>
                                                <p class="style3" id="txt_rechazados" name="txt_rechazados">
                                                     Correos Rechazados : 0
						</p>
						
						<ul class="actions">
							<li><a href="javascript:StartEmail();" class="button style3 big">Dale Play</a></li>
						</ul>
					</section>
				</div>

			<!-- Main -->
				<div class="wrapper style2">
                                    <div id="txt_message_details" class="title"></div>
					<div id="main" class="container">

						
						<!-- Features -->
							<section id="features">
								
								<div class="feature-list">
									<div class="row">
										<div class="6u 12u(mobile)">
											<section>
												<h3 class="icon fa-comment">Aceptados</h3>
                                                                                                <textarea name="mails" id="mails" placeholder="" rows="4"></textarea>
											</section>
										</div>
										<div class="6u 12u(mobile)">
											<section>
												<h3 class="icon fa-refresh">Rechazados</h3>
												<textarea name="no_mails" id="no_mails" placeholder="" rows="4"></textarea>
											</section>
										</div>
									</div>
									
								</div>
								
							</section>

					</div>
				</div>


		</div>

		<!-- Scripts -->

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/skel-viewport.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
                        <script src="functions/proccess.js"></script>

	</body>
</html>