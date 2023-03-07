package com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
