<#include "../layout/layout.ftl"/>

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
								href="${springMacroRequestContext.contextPath}/evaluation/create">
									<i class="material-icons">add</i> Create
							</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card-body table-responsive">
				<table class="table table-hover">
					<thead class="text-info">
						<tr>
							<th>Name</th>
							<th>Created At</th>
							<th>State</th>
							<th>Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<#list evaluationList as evaluation>
						<tr>
							<td>${evaluation.name}</td>
							<td>${evaluation.createdAt?string["yyyy-MM-dd HH:mm:ss"]}</td>
							<td>${evaluation.state}</td>
							<td>${evaluation.description!}</td>
							<td></td>
						</tr>
						</#list>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

</#macro>

<@display_page page_name="evaluation"/>
