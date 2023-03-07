package com.teksystems.bootcamp.wandsanddragons.springbootbackend.dto;

import com.teksystems.bootcamp.wandsanddragons.springbootbackend.model.CustomerOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderRequest {

    private CustomerOrder customer;

}
