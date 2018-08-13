<#include "../layout/layout.ftl" />

<#macro page_body>

<div class="p-3 mb-2">
	<table class="table table-striped">
		<thead class="thead-blue">
			<tr>
				<th>Name</th>
				<th>Description</th>
			</tr>
		</thead>
		<#list users as user>
		<tr>
			<td>${user.name}</td>
			<td>${(user.description)!}</td>
		</tr>
		</#list>
	</table>
</div>

</#macro>

<@display_page/>
