package com.javatechie.reg.service.api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import com.javatechie.reg.service.api.dao.UserRepository;
import com.javatechie.reg.service.api.model.User;
import java.util.List;
@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class RegistrationServiceApplication {
    @Autowired
    private UserRepository repository;

    @GetMapping("/hello")
    public String register() {
        // repository.save(user);
        return "Hi Application Working...";
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        repository.save(user);
        return "Hi " + user.getName() + " your Registration process successfully completed";
    }
    @PutMapping("/update/{id}")
    public String update(@PathVariable int id, @RequestBody User user) {
        user.setId(id);
        repository.save(user);
        return "Hi " + user.getName() + " your profile has been Updated";
    }
    @GetMapping("/getAllUsers")
    public List<User> findAllUsers() {
        return repository.findAll();
    }
    @GetMapping("/findUser/{email}")
    public List<User> findUser(@PathVariable String email) {
        return repository.findByEmail(email);
    }
    @DeleteMapping("/cancel/{id}")
    public List<User> cancelRegistration(@PathVariable int id) {
        repository.deleteById(id);
        return repository.findAll();
    }
    public static void main(String[] args) {
        SpringApplication.run(RegistrationServiceApplication.class, args);
    }
}