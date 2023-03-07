package com.teksystems.bootcamp.wandsanddragons.springbootbackend.model;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ProductTest {

    List<CustomerOrder> customers = new ArrayList<>();
    CustomerOrder order1 = new CustomerOrder(1, "Cat", "Cute");
    CustomerOrder order2 = new CustomerOrder(2, "Dog", "Bark");

    public void createCustomers(){
        customers.add(order1);
        customers.add(order2);
    }

    Product product = new Product(1, "WAN-1", "wand", "Wand",
            "amazon", "url", "na", 5, 2.0F, customers);

    @Test
    void getId() {
        Integer expect = 1;
        Integer actual = product.getId();
        assertEquals(expect, actual);
    }

    @Test
    void getSku() {
        String expect = "WAN-1";
        String actual = product.getSku();
        assertEquals(expect, actual);
    }

    @Test
    void getName() {
        String expect = "wand";
        String actual = product.getName();
        assertEquals(expect, actual);
    }

    @Test
    void getCategory() {
        String expect = "Wand";
        String actual = product.getCategory();
        assertEquals(expect, actual);
    }

    @Test
    void getManufacturer() {
        String expect = "amazon";
        String actual = product.getManufacturer();
        assertEquals(expect, actual);
    }

    @Test
    void getImageUrl() {
        String expect = "url";
        String actual = product.getImageUrl();
        assertEquals(expect, actual);
    }

    @Test
    void getDescription() {
        String expect = "na";
        String actual = product.getDescription();
        assertEquals(expect, actual);
    }

    @Test
    void getQuantity() {
        Integer expect = 5;
        Integer actual = product.getQuantity();
        assertEquals(expect, actual);
    }

    @Test
    void getPrice() {
        Float expect = 2.0F;
        Float actual = product.getPrice();
        assertEquals(expect, actual);
    }

    @Test
    void setSku() {
        String expect = "SKU";
        product.setSku("SKU");
        String actual = product.getSku();
        assertEquals(expect, actual);
    }

    @Test
    void setName() {
        String expect = "dragon";
        product.setName("dragon");
        String actual = product.getName();
        assertEquals(expect, actual);
    }

    @Test
    void setCategory() {
        String expect = "SKU";
        product.setCategory("SKU");
        String actual = product.getCategory();
        assertEquals(expect, actual);
    }

    @Test
    void setManufacturer() {
        String expect = "SKU";
        product.setManufacturer("SKU");
        String actual = product.getManufacturer();
        assertEquals(expect, actual);
    }

    @Test
    void setImageUrl() {
        String expect = "SKU";
        product.setImageUrl("SKU");
        String actual = product.getImageUrl();
        assertEquals(expect, actual);
    }

    @Test
    void setDescription() {
        String expect = "SKU";
        product.setDescription("SKU");
        String actual = product.getDescription();
        assertEquals(expect, actual);
    }

    @Test
    void setQuantity() {
        Integer expect = 10;
        product.setQuantity(10);
        Integer actual = product.getQuantity();
        assertEquals(expect, actual);
    }

    @Test
    void setPrice() {
        Float expect = 1.0F;
        product.setPrice(1.0F);
        Float actual = product.getPrice();
        assertEquals(expect, actual);
    }
}
