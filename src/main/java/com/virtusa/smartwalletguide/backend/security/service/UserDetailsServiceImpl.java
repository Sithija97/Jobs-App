package com.virtusa.smartwalletguide.backend.security.service;


import com.virtusa.smartwalletguide.backend.entitiy.User;
import com.virtusa.smartwalletguide.backend.repository.UserRepository;
import com.virtusa.smartwalletguide.backend.security.model.SpringSecurityUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service(value = "userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        String password;

        User user = userRepository.findByEmail(username);

        username = user.getEmail();
        password = user.getPassword();

        if (username == "") {
            throw new UsernameNotFoundException(String.format("No appUser found with username '%s'.", username));
        } else {
            return new SpringSecurityUser(
                   username,
                    password
            );
        }
    }

}
