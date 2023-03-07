package com.teksystems.bootcamp.wandsanddragons.springbootbackend.contoller;

import com.fasterxml.jackson.annotation.JsonView;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.Product;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.service.ProductService;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.views.View;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("wndapi/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    @CrossOrigin
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @GetMapping("/{id}")
    @CrossOrigin
    public Product findProductById(@PathVariable int id) {
        return productService.findProductById(id);
    }

    @GetMapping("/")
    @CrossOrigin
    public List<Product> findAllProducts() {
        return productService.findAllProducts();
    }

    @PutMapping("/{id}")
    @CrossOrigin
    public Product updateProductById(@PathVariable int id, @RequestBody @JsonView(value = View.AlternativeView.PUT.class) Product product) {
        return productService.updateProductById(id, product);
    }

    @PutMapping("/decrease-quantity/{id}")
    @CrossOrigin
    public Product decreaseQuantityById(@PathVariable int id, @RequestParam int quantity) {
        return productService.decreaseQuantityById(id, quantity);
    }

    @PutMapping("/update/{id}")
    @CrossOrigin
    public Product updateProductPriceAndQuantity(@PathVariable int id, @RequestParam int quantity, @RequestParam int price) {
        return productService.updateProductPriceAndQuantity(id, quantity, price);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public String deleteProductById(@PathVariable int id) {
        return productService.deleteProductById(id);
    }
}
