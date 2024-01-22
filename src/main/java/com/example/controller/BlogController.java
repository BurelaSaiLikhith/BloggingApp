package com.example.controller;

import com.example.model.Blog;
import com.example.service.BlogService;
import com.example.service.MailService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
@RequestMapping("/app/api")
public class BlogController {
    @Autowired
    private BlogService blogService;
    @Autowired
    MailService mailService;

    @Getter
    @Autowired
    private HttpServletRequest request;


    @GetMapping("/public/home")

    public String loginForm(){
        return "home";
    }

    @GetMapping("/view-blogs")
    public String showBlog(Model model){
//        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        List<Blog> blog = blogService.getAllBlogs();
        model.addAttribute("blogs",blog);
        return "view-blogs";
    }

    @GetMapping("/view-blogs/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable long id) {
        Blog blog = blogService.getBlogById(id);
        if (blog != null) {
            return new ResponseEntity<>(blog, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/add-blog")
    public String createBlog(@ModelAttribute("blog") Blog blog) {
        blogService.createBlog(blog);
        return "redirect:/app/api/add-blog";
    }
    @GetMapping("/add-blog")
    public String createBlogshow() {

        return "add-blog";
    }
    @GetMapping("/about-us")
    public String about() {

        return "about-us";
    }
    @GetMapping("/help-desk")
    public String help() {

        return "help-desk";
    }


    @PutMapping("/update-blog/{id}")
    public ResponseEntity<String> updateMobile(@PathVariable long id, @RequestBody Blog blog) {
        Blog updatedMobile = blogService.updateBlog(id, blog);
        if (updatedMobile != null) {
            return ResponseEntity.ok("Blog updated successfully");
        } else {
            return ResponseEntity.ok("!Sorry Blog not existed with this Id");
        }
    }

    @DeleteMapping("/delete-blog/{id}")
    public ResponseEntity<String> deleteBlog(@PathVariable long id) {
        boolean deleted = blogService.deleteBlog(id);
        if (deleted) {
            return ResponseEntity.ok("Blog deleted successfully");
        } else {
            return ResponseEntity.ok("!Sorry Blog not existed with this Id");
        }
    }
    @PostMapping("/helpdesk")
    public String submitHelpDeskMessage(@RequestParam("message") String message) {
        mailService.sendHelpDeskEmail(message);
        return "help-desk";
    }
//    @GetMapping("/logout")
//    public RedirectView logout(HttpServletRequest request, HttpServletResponse response) throws ServletException {
//    request.logout();
//    Cookie[] list=request.getCookies();
//     for (Cookie cookie:list){
//         Cookie cookie1=new Cookie(cookie.getName(),null);
//         cookie1.setMaxAge(0);
//         cookie1.setPath("/");
//         response.addCookie(cookie1);
//     }
//        response.setHeader("pragma", "no-cache");
//        response.setHeader("Cache-control", "no-cache, no-store, must-revalidate");
//        response.setHeader("Expires", "0");
//    request.getSession().invalidate();
//    return new RedirectView("/app/api/public/home", true);
//    }

}
