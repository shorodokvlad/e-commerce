package com.shv.Ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.shv.Ecommerce.entity.Address;
import com.shv.Ecommerce.entity.OrderItem;
import com.shv.Ecommerce.enums.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
    private UserRole role;
    private List<OrderItem> orderItemList;
    private Address address;

}
