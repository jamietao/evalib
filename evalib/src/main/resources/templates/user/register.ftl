<#include "../layout/layout.ftl" />

<#macro page_body>
<div class="row justify-content-center">
	<form method="POST" class="form col-4">
		<table class="table">
			<tr>
				<td>Name:</td>
				<td><input type="text" name="name" class="form-control" /></td>
			</tr>

			<tr>
				<td>Description</td>
				<td><input type="text" name="description" class="form-control" /></td>
			</tr>

			<tr>
				<td></td>
				<td>
					<button type="submit" class="btn btn-primary">Register</button>
				</td>
			</tr>
		</table>

	</form>
</div>

</#macro>

<@display_page/>
