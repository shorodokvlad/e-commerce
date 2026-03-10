package com.shv.Ecommerce.dto;

import jakarta.validation.constraints.NotBlank;

public class LoginRequest {
    @NotBlank(message = "Email number is required")
    private String email;

    @NotBlank(message = "Password number is required")
    private String password;
}
