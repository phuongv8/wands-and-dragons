package com.teksystems.bootcamp.wandsanddragons.springbootbackend.contoller;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Employee;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wndapi/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/")
    @CrossOrigin
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/{id}")
    @CrossOrigin
    public Employee findEmployeeById(@PathVariable(name = "id") int employeeId){
        return employeeService.findEmployeeById(employeeId);
    }

    @GetMapping("/")
    @CrossOrigin
    public List<Employee> findAllEmployees(){
        return employeeService.findAllEmployees();
    }
}
