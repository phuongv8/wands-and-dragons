package com.teksystems.bootcamp.wandsanddragons.springbootbackend.service;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.CustomerOrder;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerOrderService {

    @Autowired
    CustomerRepository customerOrderRepository;

    public CustomerOrder createCustomerOrder(CustomerOrder customerOrder) {
        return customerOrderRepository.save(customerOrder);
    }

    public List<CustomerOrder> findAllCustomerOrders(){
        return customerOrderRepository.findAll();
    }
}
