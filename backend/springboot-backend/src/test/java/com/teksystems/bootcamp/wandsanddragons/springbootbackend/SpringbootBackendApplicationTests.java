package com.teksystems.bootcamp.wandsanddragons.springbootbackend;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.contoller.EmployeeController;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.contoller.ProductController;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.service.EmployeeService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class SpringbootBackendApplicationTests {

	@Autowired
	EmployeeController employeeController;
	@Autowired
	EmployeeService employeeService;
	@Autowired
	ProductController productController;

	@Test
	void contextLoads() {
		Assertions.assertThat(employeeController).isNotNull();
	}

	@Test
	void employeeServiceContextLoads() {
		Assertions.assertThat(employeeService).isNotNull();
	}

	@Test
	void productContextLoads() {
		Assertions.assertThat(productController).isNotNull();
	}

}
