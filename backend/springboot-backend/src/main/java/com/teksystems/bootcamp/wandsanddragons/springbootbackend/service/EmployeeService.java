package com.teksystems.bootcamp.wandsanddragons.springbootbackend.service;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Employee;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(int employeeId) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);
        if (employee.isPresent()) {
            return employee.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "That employee ID: " + " does not exist");
        }
    }

    public List<Employee> findAllEmployees(){
        return employeeRepository.findAll();
    }
}
