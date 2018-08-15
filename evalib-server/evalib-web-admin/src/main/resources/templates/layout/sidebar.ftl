<div class="sidebar" data-color="purple" data-background-color="white"
	data-image="${springMacroRequestContext.contextPath}/static/img/sidebar-1.jpg">
	<!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
	<div class="logo">
		<a href="http://www.creative-tim.com" class="simple-text logo-normal">
			Evaluation </a>
	</div>
	<div class="sidebar-wrapper">
		<ul class="nav">
			<li class="nav-item active" data-page="dashboard"><a class="nav-link"
				href="${springMacroRequestContext.contextPath}/dashboard"> <i class="material-icons">dashboard</i>
					<p>Dashboard</p>
			</a></li>

			<li class="nav-item" data-page="evaluation"><a class="nav-link"
				href="${springMacroRequestContext.contextPath}/evaluation"> <i class="material-icons">content_paste</i>
					<p>Evaluation</p>
			</a></li>

			<li class="nav-item" data-page="administration"><a class="nav-link"
				href="${springMacroRequestContext.contextPath}/user"> <i
					class="material-icons">person</i>
					<p>Administration</p>
			</a></li>
			<li class="nav-item" data-page="notification"><a class="nav-link" href=""> <i
					class="material-icons">notifications</i>
					<p>Notifications</p>
			</a></li>
		</ul>
	</div>
</div>