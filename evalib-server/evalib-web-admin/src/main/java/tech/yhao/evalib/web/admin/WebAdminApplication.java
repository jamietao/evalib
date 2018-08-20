package tech.yhao.evalib.web.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;
import org.springframework.http.HttpStatus;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// The static content will not servered if missing @EnableAutoConfiguration. 
@EnableAutoConfiguration
@SpringBootApplication
@ImportResource("classpath:spring/spring-beans.xml")
@ComponentScan("tech.yhao.evalib.*")
public class WebAdminApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(WebAdminApplication.class, args);
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/notFound").setViewName("redirect:/");
		registry.addViewController("/login.html").setViewName("/login");
		registry.addViewController("403.html").setViewName("/403");
	}

	@Bean
	public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> containerCustomizer() {
		return container -> {
			container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/notFound"));
		};
	}
}
