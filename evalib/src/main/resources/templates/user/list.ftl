<#include "../layout/layout.ftl"/>

<#macro page_body>

<div class="row">
	<div class="col-lg-12 col-md-12">
		<div class="card">
			<div class="card-header card-header-tabs card-header-primary">
				<div class="nav-tabs-navigation">
					<div class="nav-tabs-wrapper">
						<span class="nav-tabs-title">Users:</span>
						<ul class="nav nav-tabs" data-tabs="tabs">
							<li class="nav-item"><a class="nav-link active float-right"
								href="${springMacroRequestContext.contextPath}/user/register">
									<i class="material-icons">add</i> Create
							</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card-body table-responsive">
				<table class="table table-hover">
					<thead class="text-warning">
						<tr>
							<th>Name</th>
							<th>Created At</th>
							<th>Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<#list users as user>
						<tr>
							<td>${user.name}</td>
							<td>${user.createdAt?string["yyyy-MM-dd HH:mm:ss"]}</td>
							<td>${(user.description)!}</td>
							<td><a
								href="${springMacroRequestContext.contextPath}/user/delete?id=${user.id}">Delete</a></td>
						</tr>
						</#list>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

</#macro>

<@display_page/>
