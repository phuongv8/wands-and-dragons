package com.teksystems.bootcamp.wandsanddragons.springbootbackend.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Employee;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository.EmployeeRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.*;
import org.mockito.InjectMocks;

@ExtendWith(MockitoExtension.class)
class EmployeeServiceTest {

    @InjectMocks
    EmployeeService employeeService;

    @Mock
    private EmployeeRepository employeeRepository;

    List<Employee> employees = new ArrayList<>();
    Employee e1 = new Employee(1, "Jane", "Doe", "jd", "pw", "nothing");
    Employee e2 = new Employee(2, "John", "Joe", "jj", "pd", "something");
    Employee e3 = new Employee(3, "Jo", "Zoe", "jz", "pt", "everything");

    public void addEmployee() {
        employees.add(e1);
        employees.add(e2);
        employees.add(e3);
    }
    @Test
    @DisplayName("Should return correct employees' size")
    public void testEmployeesSize() {
        addEmployee();

        when(employeeRepository.findAll()).thenReturn(employees);

        List<Employee> testList = employeeService.findAllEmployees();
        assertEquals(3, testList.size());
    }

    @Test
    @DisplayName("Should return correct employee's first name")
    public void testEmployeesFirstName() {
        addEmployee();

        when(employeeRepository.findAll()).thenReturn(employees);

        List<Employee> testList = employeeService.findAllEmployees();
        assertEquals("Jane", testList.get(0).getFirstName());
    }

    @Test
    @DisplayName("Should return employee by id")
    public void testFindEmployeeById() {
        when(employeeRepository.findById(1)).thenReturn(Optional.of(e1));

        Employee actual = employeeService.findEmployeeById(1);
        assertEquals("Jane", actual.getFirstName());
    }

    @Test
    @DisplayName("Should create or save employee")
    void testCreateEmployeeSucceed() {
        when(employeeRepository.save(e1)).thenReturn(e1);

        Employee savedEmployee = employeeService.createEmployee(e1);

        assertNotNull(savedEmployee);
    }
}