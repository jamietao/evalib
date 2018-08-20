
<#macro page_body></#macro>

<#macro script_section> <!--   Core JS Files   --> <script
	src="${springMacroRequestContext.contextPath}/static/js/core/jquery.min.js"
	type="text/javascript"></script> <script
	src="${springMacroRequestContext.contextPath}/static/js/core/bootstrap-material-design.min.js"
	type="text/javascript"></script> </#macro>

<#macro display_page> <!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8" />
<link rel="icon" type="image/png"
	href="${springMacroRequestContext.contextPath}/static/img/favicon.png">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>Enjoy Evaluation</title>
<meta
	content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
	name='viewport' />
<!--     Fonts and icons     -->
<link rel="stylesheet" type="text/css"
	href="${springMacroRequestContext.contextPath}/static/css/google-material-icon.css" />
<!-- CSS Files -->
<link
	href="${springMacroRequestContext.contextPath}/static/css/material-site.css?v=2.1.0"
	rel="stylesheet" />
</head>

<body>
	<div class="wrapper ">

		<div class="main-panel">
			<#include "./layout/navbar.ftl"/>

			<!-- End Navbar -->
			<div class="content">
				<div class="container-fluid">Enjoy Evaluation</div>
			</div>

			<#include "./layout/footer.ftl"/>
		</div>
	</div>
</body>
</html>
</#macro>

<@display_page />
