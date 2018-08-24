<#include "../layout/layout.ftl" />

<#macro page_css>
<link
	href="${springMacroRequestContext.contextPath}/static/css/stepper.css"
	rel="stylesheet" />
</#macro>

<#macro page_script> <script
	src="${springMacroRequestContext.contextPath}/static/js/plugins/stepper.js"
	type="text/javascript"></script> </#macro>

<#macro page_body>

<div class="row">
	<div class="col-lg-12 col-md-12">
		<div class="card">
			<div class="card-header card-header-tabs card-header-info">
				<div class="nav-tabs-navigation">
					<div class="nav-tabs-wrapper">
						<span class="nav-tabs-title">Evaluation:
							${evaluation.description!}</span>
						<ul class="nav nav-tabs" data-tabs="tabs">
							<li class="nav-item"><a class="nav-link active float-right"
								href="${springMacroRequestContext.contextPath}/admin/evaluation">
									<i class="material-icons">list</i> Back
							</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card-body">

				<div id="accordion">

					<#list evaluation.choiceQuestionList as question>
					<div class="card">
						<div class="card-header" id="headingOne">
							<h5 class="mb-0">
								<button class="btn btn-link" data-toggle="collapse"
									data-target="#collapseOne" aria-expanded="true"
									aria-controls="collapseOne">${question.description!}</button>
							</h5>
						</div>

						<div id="collapseOne" class="collapse"
							aria-labelledby="headingOne" data-parent="#accordion">
							<div class="card-body">Anim pariatur cliche reprehenderit,
								enim eiusmod high life accusamus terry richardson ad squid. 3
								wolf moon officia aute, non cupidatat skateboard dolor brunch.
								Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
								tempor, sunt aliqua put a bird on it squid single-origin coffee
								nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
								craft beer labore wes anderson cred nesciunt sapiente ea
								proident. Ad vegan excepteur butcher vice lomo. Leggings
								occaecat craft beer farm-to-table, raw denim aesthetic synth
								nesciunt you probably haven't heard of them accusamus labore
								sustainable VHS.</div>
						</div>
					</div>
					</#list>
				</div>

			</div>
		</div>
	</div>
</div>

</#macro>

<@display_page page_name="evaluation"/>
