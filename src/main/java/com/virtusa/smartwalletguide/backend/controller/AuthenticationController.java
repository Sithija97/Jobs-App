package com.virtusa.smartwalletguide.backend.controller;


import com.virtusa.smartwalletguide.backend.dto.UserDTO;
import com.virtusa.smartwalletguide.backend.security.AppConstant;
import com.virtusa.smartwalletguide.backend.security.TokenUtils;
import com.virtusa.smartwalletguide.backend.security.model.AuthenticationRequest;
import com.virtusa.smartwalletguide.backend.security.model.AuthenticationResponse;
import com.virtusa.smartwalletguide.backend.security.model.SpringSecurityUser;
import com.virtusa.smartwalletguide.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/authentication")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    private PasswordEncoder passwordEncoder;

    @PostMapping(value = "/auth")
    public ResponseEntity<?> authenticationRequest(@RequestBody AuthenticationRequest authenticationRequest)
            throws AuthenticationException {

        // Perform the authentication
        Authentication authentication = this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Reload password post-authentication so we can generate token
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        String token = this.tokenUtils.generateToken(userDetails);

        String username = authenticationRequest.getUsername();

        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        authenticationResponse.setToken(token);
        authenticationResponse.setUser(userService.findUserByUsername(username));

        // Return the token
        return ResponseEntity.ok(authenticationResponse);
    }

    @RequestMapping(value = "/refresh", method = RequestMethod.GET)
    public ResponseEntity<?> authenticationRequest(HttpServletRequest request) {
        String token = request.getHeader(AppConstant.tokenHeader);
        String username = this.tokenUtils.getUsernameFromToken(token);
        SpringSecurityUser user = (SpringSecurityUser) this.userDetailsService.loadUserByUsername(username);
        if (this.tokenUtils.canTokenBeRefreshed(token, user.getLastPasswordReset())) {
            String refreshedToken = this.tokenUtils.refreshToken(token);
            return ResponseEntity.ok(new AuthenticationResponse(refreshedToken));
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/register")
    public UserDTO registerUser(@RequestBody UserDTO userDTO){
        return userService.registerUser(userDTO);
    }




}
