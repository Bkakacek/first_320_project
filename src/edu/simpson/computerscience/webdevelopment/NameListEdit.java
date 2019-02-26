package edu.simpson.computerscience.webdevelopment;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import java.io.*;

@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/JSON");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("JSON Post");

        // Open the request for reading. Read in each line, put it into a string.
        // Yes, I think there should be an easier way.
        java.io.BufferedReader in = request.getReader();
        String requestString = new String();
        for (String line; (line = in.readLine()) != null; requestString += line);

        // Output the string we got as a request, just as a check
        out.println(requestString);

        // Great! Now we want to use GSON to parse the object, and pop it into our business object. Field
        // names have to match. That's the magic.
        Gson gson = new Gson();
        // Instead of making the class the TestBusiness object. I changed it to the Person class
        // In order to grab all of the information based on the form fields
        Person fromJson = gson.fromJson(requestString, Person.class);
        PersonDAO.addPersonData(fromJson);

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}