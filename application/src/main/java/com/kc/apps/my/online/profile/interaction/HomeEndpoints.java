package com.kc.apps.my.online.profile.interaction;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
public class HomeEndpoints {
    private Logger logger = LoggerFactory.getLogger(getClass());

    @RequestMapping(method = RequestMethod.GET, value = "welcome")
    public String welcomeMessage() {
        logger.info("Returning welcome message");
        return "Hello, welcome to Kiran Chaluvaraju's online profile.";
    }
}
