
<#macro page_body></#macro>

<#macro script_section> <!--   Core JS Files   --> <script
	src="${springMacroRequestContext.contextPath}/static/js/core/jquery.min.js"
	type="text/javascript"></script> <script
	src="${springMacroRequestContext.contextPath}/static/js/core/popper.min.js"
	type="text/javascript"></script> <script
	src="${springMacroRequestContext.contextPath}/static/js/core/bootstrap-material-design.min.js"
	type="text/javascript"></script> <script
	src="${springMacroRequestContext.contextPath}/static/js/plugins/perfect-scrollbar.jquery.min.js"></script>
<!--  Notifications Plugin    --> <script
	src="${springMacroRequestContext.contextPath}/static/js/plugins/bootstrap-notify.js"></script>
<!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
</#macro>

<#macro display_page page_name> <!DOCTYPE html>
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
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
<!-- CSS Files -->
<link
	href="${springMacroRequestContext.contextPath}/static/css/material-dashboard.css?v=2.1.0"
	rel="stylesheet" />
</head>

<body>
	<div class="wrapper ">
		<#include "./sidebar.ftl"/>

		<div class="main-panel">
			<#include "./navbar.ftl"/>

			<!-- End Navbar -->
			<div class="content">
				<div class="container-fluid"><@page_body /></div>
			</div>

			<#include "./footer.ftl"/>
		</div>
	</div>

	<@script_section />
	
	<script>
		$(function(){
			$("li.nav-item[data-page='${page_name}']").addClass('active');
		});	
	</script>
</body>
</html>
</#macro>