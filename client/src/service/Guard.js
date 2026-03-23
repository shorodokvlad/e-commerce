import React, { Component } from "react";
import {Navigate, useLocation} from "react-router-dom";
import ApiService from "./ApiSvervice";

export const protectedRoute = ({element: Comment}) => {
    const location = useLocation();

    return ApiService.isAuthenticated() ? (
        Component
    ) : (
        <Navigate to= "/login" replace state = {{from: location}}/>
    );
}

export const adminRoute = ({element: Comment}) => {
    const location = useLocation();

    return ApiService.isAdmin() ? (
        Component
    ) : (
        <Navigate to= "/login" replace state = {{from: location}}/>
    );
}
