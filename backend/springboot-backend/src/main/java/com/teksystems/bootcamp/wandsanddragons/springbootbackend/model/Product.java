package com.teksystems.bootcamp.wandsanddragons.springbootbackend.model;


import com.fasterxml.jackson.annotation.JsonView;
import com.teksystems.bootcamp.wandsanddragons.springbootbackend.views.View;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    @Getter
    private Integer id;


    @Getter
    @Setter
    @JsonView(value = {View.AlternativeView.Post.class})
    private String sku;

    @Getter
    @Setter
    @JsonView(value = {View.AlternativeView.Post.class, View.AlternativeView.PUT.class})
    private String name;


    @Getter
    @Setter
    @JsonView(value = {View.AlternativeView.Post.class})
    private String category;


    @Getter
    @Setter
    @JsonView(value = {View.AlternativeView.Post.class})
    private String manufacturer;


    @Getter
    @Setter
    @JsonView(value = {View.AlternativeView.Post.class, View.AlternativeView.PUT.class})
    @Column(name = "imageurl")
    private String imageUrl;


    @Getter
    @Setter
    @JsonView(value = {View.AlternativeView.Post.class})
    private String description;

    @Getter
    @Setter
    @JsonView(value = {View.AlternativeView.Post.class, View.AlternativeView.PUT.class})
    private Integer quantity;


    @Getter
    @Setter
    @JsonView(value = {View.AlternativeView.Post.class, View.AlternativeView.PUT.class})
    private Float price;

    @OneToMany(targetEntity = CustomerOrder.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "product_fk", referencedColumnName = "id")
    private List<CustomerOrder> customers;

}
