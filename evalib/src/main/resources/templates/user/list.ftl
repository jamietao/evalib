<#include "../layout/layout.ftl" />

<#macro page_body>

<div class="p-3 mb-2">
	<table class="table table-striped">
		<thead class="thead-blue">
			<tr>
				<th>Name</th>
				<th>Created At</th>
				<th>Description</th>				
				<th>Action</th>
			</tr>
		</thead>
		<#list users as user>
		<tr>
			<td>${user.name}</td>
			<td>${user.createdAt?string["yyyy-MM-dd HH:mm:ss"]}</td>
			<td>${(user.description)!}</td>
			<td><a
				href="${springMacroRequestContext.contextPath}/user/delete?id=${user.id}">Delete</a></td>
		</tr>
		</#list>
	</table>
</div>

</#macro>

<@display_page/>
