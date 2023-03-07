package com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerOrder, Integer> {
}
