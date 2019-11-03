package com.virtusa.smartwalletguide.backend;


import com.virtusa.smartwalletguide.backend.entitiy.User;
import com.virtusa.smartwalletguide.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;


@Component
public class DummyDataLoader implements ApplicationRunner {


    @Autowired
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        this.passwordEncoder = new BCryptPasswordEncoder();


        try{
           userRepository.save(new User("Amesh M Jayaweera","ameshmbjyw97@gmail.com","Engineer",passwordEncoder.encode("123")));

        }catch (Exception e){
            System.out.println("========= " + e.getMessage());
        }

    }

}
