package com.example.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;
    public void sendHelpDeskEmail(String messageText) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("vijaylikhith129@gmail.com");
        message.setTo("sai.burela@prodevans.com");
        message.setSubject("Message Received from Help Desk");
        message.setText("\n\nRespected Admin,\n\n"+messageText);
        javaMailSender.send(message);

    }
}