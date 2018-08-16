<#include "../layout/layout.ftl" />

<#macro page_body>

<div class="row">
	<div class="col-lg-12 col-md-12">
		<div class="card">
			<div class="card-header card-header-tabs card-header-info">
				<div class="nav-tabs-navigation">
					<div class="nav-tabs-wrapper">
						<span class="nav-tabs-title">Evaluation:</span>
						<ul class="nav nav-tabs" data-tabs="tabs">
							<li class="nav-item"><a class="nav-link active float-right"
								href="${springMacroRequestContext.contextPath}/evaluation">
									<i class="material-icons">list</i> Back
							</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card-body">
				<form method="POST">
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label class="bmd-label-floating">Name</label> <input
									type="text" class="form-control" name="name">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label class="bmd-label-floating">Description</label> <input
									type="text" class="form-control" name="description">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<button type="submit" class="btn btn-info float-right">Create</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

</#macro>

<@display_page page_name="evaluation"/>
