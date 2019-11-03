package com.virtusa.smartwalletguide.backend.security.model;


import com.virtusa.smartwalletguide.backend.entitiy.User;

public class AuthenticationResponse {

	private User user;
	private String token;

	public AuthenticationResponse() {
	}

	public AuthenticationResponse(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
