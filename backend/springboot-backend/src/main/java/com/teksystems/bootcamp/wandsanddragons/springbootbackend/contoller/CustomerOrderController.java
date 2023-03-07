package com.teksystems.bootcamp.wandsanddragons.springbootbackend.contoller;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.dto.OrderRequest;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.CustomerOrder;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository.CustomerRepository;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wndapi/customer-order")
public class CustomerOrderController {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ProductRepository productRepository;

   @PostMapping("/")
  public CustomerOrder placeOrder(@RequestBody OrderRequest customerOrder){
      return customerRepository.save(customerOrder.getCustomer());
  }

  @GetMapping("/")
  public List<CustomerOrder> findAllOrders(){
       return customerRepository.findAll();
  }
}
