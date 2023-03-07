package com.teksystems.bootcamp.wandsanddragons.springbootbackend.model;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class EmployeeTest {
    Employee employee = new Employee(1, "Jane", "Doe",
            "jd", "pw", "nothing");

    @Test
    public void getFirstName() {
        String expect = "Jane";
        String actual = employee.getFirstName();
        assertEquals(expect, actual);
    }

    @Test
    public void getLastName() {
        String expect = "Doe";
        String actual = employee.getLastName();
        assertEquals(expect, actual);
    }

    @Test
    public void getId() {
        Integer expect = 1;
        Integer actual = employee.getId();
        assertEquals(expect, actual);
    }

    @Test
    public void getUsername() {
        String expect = "jd";
        String actual = employee.getUsername();
        assertEquals(expect, actual);
    }

    @Test
    public void getPassword() {
        String expect = "pw";
        String actual = employee.getPassword();
        assertEquals(expect, actual);
    }

    @Test
    public void getDescription() {
        String expect = "nothing";
        String actual = employee.getDescription();
        assertEquals(expect, actual);
    }

    @Test
    public void setFirstName() {
        String expect = "Yo";
        employee.setFirstName("Yo");
        String actual = employee.getFirstName();
        assertEquals(expect, actual);
    }

    @Test
    public void setLastName() {
        String expect = "Yay";
        employee.setLastName("Yay");
        String actual = employee.getLastName();
        assertEquals(expect, actual);
    }

    @Test
    public void setUserName() {
        String expect = "why";
        employee.setUsername("why");
        String actual = employee.getUsername();
        assertEquals(expect, actual);
    }

    @Test
    public void setPassword() {
        String expect = "pass";
        employee.setPassword("pass");
        String actual = employee.getPassword();
        assertEquals(expect, actual);
    }

    @Test
    public void setDesc() {
        String expect = "go";
        employee.setDescription("go");
        String actual = employee.getDescription();
        assertEquals(expect, actual);
    }


}