package com.teksystems.bootcamp.wandsanddragons.springbootbackend.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.CustomerOrder;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository.CustomerRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.*;
import org.mockito.InjectMocks;

@ExtendWith(MockitoExtension.class)
class CustomerOrderServiceTest {
    @InjectMocks
    CustomerOrderService customerOrderService;

    @Mock
    private CustomerRepository customerRepository;

    List<CustomerOrder> customers = new ArrayList<>();
    CustomerOrder order1 = new CustomerOrder(1, "Cat", "Cute");
    CustomerOrder order2 = new CustomerOrder(2, "Dog", "Bark");

    public void createCustomers(){
        customers.add(order1);
        customers.add(order2);
    }

    @Test
    void testCreateCustomerOrder() {
        when(customerRepository.save(order1)).thenReturn(order1);

        CustomerOrder savedOrder = customerOrderService.createCustomerOrder(order1);

        assertNotNull(savedOrder);

    }

    @Test
    void testFindAllCustomerOrdersSize() {
        createCustomers();

        when(customerRepository.findAll()).thenReturn(customers);

        List<CustomerOrder> testList = customerOrderService.findAllCustomerOrders();
        assertEquals(2, testList.size());
    }
}
