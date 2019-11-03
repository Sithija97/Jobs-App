package com.virtusa.smartwalletguide.backend.controller;

import com.virtusa.smartwalletguide.backend.dto.*;
import com.virtusa.smartwalletguide.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/service")
public class UserServiceController {


    @Autowired
    private UserService userService;

    @PostMapping("/updateUser")
    public UserDTO updateUser(@RequestBody UserDTO userDTO){
        return userService.updateUser(userDTO);
    }

    @PostMapping("enterExpensesLimits")
    public boolean enterExpenseLimits(@RequestBody List<ExpenseLimitDTO> expenseLimitDTOS){
        return userService.enterExpenseLimit(expenseLimitDTOS);
    }

    @PostMapping("/getExpensesLimits")
    public List<ExpenseLimitDTO> getExpensesLimits(@RequestBody UserDTO userDTO){
        return userService.getExpenseLimits(userDTO);
    }

    @PostMapping("/enterIncomes")
    public boolean enterIncomes(@RequestBody List<IncomeDTO> incomeDTOS){
        return userService.enterIncomes(incomeDTOS);
    }

    @PostMapping("/getIncomes")
    public List<IncomeDTO> getIncomes(@RequestBody UserDTO userDTO){
        return userService.getIncomes(userDTO);
    }


    @PostMapping("/enterExpenses")
    public boolean enterExpenses(@RequestBody List<ExpenseDTO> expenseDTOS){
        return userService.enterExpenses(expenseDTOS);
    }

    @PostMapping("/getExpenses")
    public List<ExpenseDTO> getExpenses(@RequestBody UserDTO userDTO){
        return userService.getExpenses(userDTO);
    }

    @PostMapping("/enterSavings")
    public boolean enterSavings(@RequestBody List<SavingDTO> savingDTOS){
        return userService.enterSavings(savingDTOS);
    }

    @PostMapping("/getSavings")
    public List<SavingDTO> getSavings(@RequestBody UserDTO userDTO){
        return userService.getSavings(userDTO);
    }

    @PostMapping("/addSpecialEvent")
    public boolean addSpecialEvent(@RequestBody EventDTO eventDTO){
        return userService.addSpecialEvent(eventDTO);
    }

    @PostMapping("/getSpecialEvents")
    public List<SavingDTO> getSpecialEvents(@RequestBody UserDTO userDTO){
        return userService.getSavings(userDTO);
    }



}
