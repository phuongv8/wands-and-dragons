package com.teksystems.bootcamp.wandsanddragons.springbootbackend.service;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Product;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    public Product findProductById(int id){
        Optional<Product> product = productRepository.findById(id);

        if(product.isPresent()){
            return product.get();
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No item exists with ID: " + id);
        }
    }

    public List<Product> findAllProducts(){
        return productRepository.findAll();
    }

    public Product updateProductById(int id, Product productDetails){
        Optional<Product> product = productRepository.findById(id);

        if (product.isPresent()){
            Product existingProduct = product.get();
            existingProduct.setName(productDetails.getName());
            existingProduct.setCategory(productDetails.getCategory());
            existingProduct.setImageUrl(productDetails.getImageUrl());
            existingProduct.setQuantity(productDetails.getQuantity());
           return productRepository.save(existingProduct);
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No product exists with ID: " + id);
        }
    }

    public Product decreaseQuantityById(int id, int quantity){
        Optional<Product> product = productRepository.findById(id);

        if (product.isPresent()){
            Product existingProduct = product.get();
            existingProduct.setQuantity(quantity);
            return productRepository.save(existingProduct);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No product exists with ID: " + id);
        }
    }

    public Product updateProductPriceAndQuantity(int id, int quantity, int price){
        Optional<Product> product = productRepository.findById(id);

        if (product.isPresent()){
            Product existingProduct = product.get();
            existingProduct.setQuantity(quantity);
            existingProduct.setPrice((float) price);
            return productRepository.save(existingProduct);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No product exists with ID: " + id);
        }
    }

    public String deleteProductById(int id){
        try {
            productRepository.deleteById(id);
            return "Product ID: " + id + " has been removed.";
        } catch (EmptyResultDataAccessException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No rating exist with that ID: " + id);
        }
    }
}
