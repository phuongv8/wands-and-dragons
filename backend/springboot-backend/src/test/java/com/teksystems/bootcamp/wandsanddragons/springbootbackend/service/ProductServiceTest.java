package com.teksystems.bootcamp.wandsanddragons.springbootbackend.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.willDoNothing;
import static org.mockito.Mockito.*;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.CustomerOrder;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Product;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository.ProductRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.*;
import org.mockito.InjectMocks;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {
    @InjectMocks
    ProductService productService;

    @Mock
    private ProductRepository productRepository;

    List<CustomerOrder> customers = new ArrayList<>();
    CustomerOrder order1 = new CustomerOrder(1, "Cat", "Cute");
    CustomerOrder order2 = new CustomerOrder(2, "Dog", "Bark");

    public void createCustomers(){
        customers.add(order1);
        customers.add(order2);
    }

    List<Product> products = new ArrayList<>();
    Product product = new Product(1, "W", "Wand", "Wand",
            "Amazon", "url", "good", 2, 2.0F, customers);
    Product p2 = new Product(2, "Y", "Wo", "Band",
            "Wal", "why", "bad", 4, 21.0F, customers);


    @Test
    @DisplayName("Should return correct product's description")
    public void testEmployeesFirstName() {
        products.add(product);
        products.add(p2);

        when(productRepository.findAll()).thenReturn(products);

        List<Product> testList = productService.findAllProducts();
        assertEquals("good", testList.get(0).getDescription());
    }

    @Test
    @DisplayName("Should create or save product")
    void testCreateProduct() {
        when(productRepository.save(product)).thenReturn(product);

        Product savedProduct = productService.createProduct(product);

        assertNotNull(savedProduct);
    }

    @Test
    @DisplayName("Should return product description by id")
    public void testFindProductById() {
        when(productRepository.findById(1)).thenReturn(Optional.of(product));

        Product actual = productService.findProductById(1);
        assertEquals("good", actual.getDescription());
    }

    @Test
    @DisplayName("Should delete product")
    public void testDeleteProduct() {
        Integer id = 1;

        willDoNothing().given(productRepository).deleteById(id);
        productService.deleteProductById(id);
        verify(productRepository, times(1)).deleteById(id);
    }
}
