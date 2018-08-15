package tech.yhao.evalib.web.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;

// The static content will not servered if missing @EnableAutoConfiguration. 
@EnableAutoConfiguration
@SpringBootApplication
@ImportResource("classpath:spring/spring-beans.xml")
@ComponentScan("tech.yhao.evalib.*")
public class WebAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebAdminApplication.class, args);
	}
}
