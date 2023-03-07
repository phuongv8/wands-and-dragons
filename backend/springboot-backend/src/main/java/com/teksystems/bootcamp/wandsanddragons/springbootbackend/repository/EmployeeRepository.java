package com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
