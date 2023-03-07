package com.teksystems.bootcamp.wandsanddragons.springbootbackend.contoller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Employee;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.service.EmployeeService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@ExtendWith(SpringExtension.class)
@WebMvcTest(EmployeeController.class)
@AutoConfigureMockMvc
class EmployeeControllerTest {

    @MockBean
    EmployeeService employeeService;

    @Autowired
    private WebApplicationContext webApplicationContext;
    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void createEmployee() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();

        Employee employee = new Employee();
        Mockito.when(employeeService.createEmployee(employee)).thenReturn(employee);
        mockMvc.perform(MockMvcRequestBuilders.post("/wndapi/employee/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(employee))
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    @DisplayName("Should return all employees")
    public void findAllEmployees() throws Exception {
        Employee employee = new Employee(1, "Jane", "Doe", "jd", "pw", "nothing");
        List<Employee> employees = List.of(employee);

        Mockito.when(employeeService.findAllEmployees()).thenReturn(employees);

        mockMvc.perform(get("/wndapi/employee/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(1)))
                .andExpect(jsonPath("$[0].firstName", Matchers.is("Jane")));
    }

    @Test
    @DisplayName("Should return employee by id")
    public void findEmployeeById() throws Exception {
        Employee employee = new Employee(1, "Jane", "Doe", "jd", "pw", "nothing");

        Mockito.when(employeeService.findEmployeeById(1)).thenReturn(employee);

        mockMvc.perform(get("/wndapi/employee/{id}", 1))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("Jane"));
    }
}