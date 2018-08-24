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
						<span class="nav-tabs-title">Evaluation:</span>
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

				<!-- Grid row -->
				<div class="row pt-5 d-flex justify-content-center">

					<!-- Grid column -->
					<div class="col-md-2 pl-5 pl-md-0 pb-5">

						<!-- Stepper -->
						<div class="steps-form-3">
							<div
								class="steps-row-3 setup-panel-3 d-flex justify-content-between">
								<div class="steps-step-3">
									<a href="#step-5" type="button"
										class="btn btn-info btn-circle-3 waves-effect ml-0"
										data-toggle="tooltip" data-placement="top"
										title="Question Description"><i class="material-icons">assignment</i></a>
								</div>
								<div class="steps-step-3">
									<a href="#step-6" type="button"
										class="btn btn-pink btn-circle-3 waves-effect p-3"
										data-toggle="tooltip" data-placement="top"
										title="Question Options"><i class="material-icons">list</i></a>
								</div>
								<div class="steps-step-3 no-height">
									<a href="#step-8" type="button"
										class="btn btn-pink btn-circle-3 waves-effect p-3"
										data-toggle="tooltip" data-placement="top"
										title="Complete"><i class="fa fa-check"
										aria-hidden="true"></i></a>
								</div>
							</div>
						</div>

					</div>
					<!-- Grid column -->

					<!-- Grid column -->
					<div class="col-md-7">

						<form role="form" action="" method="post">

							<!-- First Step -->
							<div class="row setup-content-3" id="step-5">
								<div class="col-md-12">
									<h3 class="font-weight-bold pl-0 my-4">
										<strong>Question Description</strong>
									</h3>
									<div class="form-group md-form">
										<label for="yourEmail-3" data-error="wrong"
											data-success="right">Email</label> <input id="yourEmail-3"
											type="email" required="required"
											class="form-control validate">
									</div>
									<div class="form-group md-form">
										<label for="yourUsername-3" data-error="wrong"
											data-success="right">Username</label> <input
											id="yourUsername-3" type="text" required="required"
											class="form-control validate">
									</div>
									<div class="form-group md-form mt-3">
										<label for="yourPassword-3" data-error="wrong"
											data-success="right">Password</label> <input
											id="yourPassword-3" type="password" required="required"
											class="form-control validate">
									</div>
									<div class="form-group md-form mt-3">
										<label for="repeatPassword-3" data-error="wrong"
											data-success="right">Repeat Password</label> <input
											id="repeatPassword-3" type="password" required="required"
											class="form-control validate">
									</div>
									<button
										class="btn btn-mdb-color btn-rounded nextBtn-3 float-right"
										type="button">Next</button>
								</div>
							</div>

							<!-- Second Step -->
							<div class="row setup-content-3" id="step-6">
								<div class="col-md-12">
									<h3 class="font-weight-bold pl-0 my-4">
										<strong>Personal Data</strong>
									</h3>
									<div class="form-group md-form">
										<label for="yourName-3" data-error="wrong"
											data-success="right">First Name</label> <input
											id="yourName-3" type="text" required="required"
											class="form-control validate">
									</div>
									<div class="form-group md-form mt-3">
										<label for="secondName-3" data-error="wrong"
											data-success="right">Second Name</label> <input
											id="secondName-3" type="text" required="required"
											class="form-control validate">
									</div>
									<div class="form-group md-form mt-3">
										<label for="yourAddress-3" data-error="wrong"
											data-success="right">Address</label>
										<textarea id="yourAddress-3" type="text" required="required"
											rows="2" class="md-textarea validate form-control"></textarea>
									</div>
									<button
										class="btn btn-mdb-color btn-rounded prevBtn-3 float-left"
										type="button">Previous</button>
									<button
										class="btn btn-mdb-color btn-rounded nextBtn-3 float-right"
										type="button">Next</button>
								</div>
							</div>

							<!-- Third Step -->
							<div class="row setup-content-3" id="step-7">
								<div class="col-md-12">
									<h3 class="font-weight-bold pl-0 my-4">
										<strong>Terms and conditions</strong>
									</h3>
									<div class="form-check">
										<input type="checkbox" id="checkbox115"
											class="form-check-input"> <label for="checkbox115"
											class="form-check-label">I agree to the terms and
											conditions</label>
									</div>
									<div class="form-check">
										<input type="checkbox" id="checkbox114"
											class="form-check-input"> <label for="checkbox114"
											class="form-check-label">I want to receive newsletter</label>
									</div>
									<button
										class="btn btn-mdb-color btn-rounded prevBtn-3 float-left"
										type="button">Previous</button>
									<button
										class="btn btn-mdb-color btn-rounded nextBtn-3 float-right"
										type="button">Next</button>
								</div>
							</div>

							<!-- Fourth Step -->
							<div class="row setup-content-3" id="step-8">
								<div class="col-md-12">
									<h3 class="font-weight-bold pl-0 my-4">
										<strong>Finish</strong>
									</h3>
									<h2 class="text-center font-weight-bold my-4">Registration
										completed!</h2>
									<button
										class="btn btn-mdb-color btn-rounded prevBtn-3 float-left"
										type="button">Previous</button>
									<button class="btn btn-success btn-rounded float-right"
										type="submit">Submit</button>
								</div>
							</div>
						</form>

					</div>
					<!-- Grid column -->

				</div>
				<!-- Grid row -->
			</div>
		</div>
	</div>
</div>

</#macro>

<@display_page page_name="evaluation"/>
