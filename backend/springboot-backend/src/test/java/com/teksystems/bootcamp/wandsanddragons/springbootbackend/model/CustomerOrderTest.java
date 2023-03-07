package com.teksystems.bootcamp.wandsanddragons.springbootbackend.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CustomerOrderTest {
    CustomerOrder customerOrder = new CustomerOrder(1, "Cat", "Cute");
    @Test
    void getId() {
        assertEquals(1, customerOrder.getId());
    }

    @Test
    void getFirstName() {
        assertEquals("Cat", customerOrder.getFirstName());
    }

    @Test
    void getLastName() {
        assertEquals("Cute", customerOrder.getLastName());
    }

    @Test
    void setId() {
        customerOrder.setId(2);
        assertEquals(2, customerOrder.getId());
    }

    @Test
    void setFirstName() {
        customerOrder.setFirstName("Dog");
        assertEquals("Dog", customerOrder.getFirstName());
    }

    @Test
    void setLastName() {
        customerOrder.setLastName("Bark");
        assertEquals("Bark", customerOrder.getLastName());
    }
}
