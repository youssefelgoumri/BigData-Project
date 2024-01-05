package com.example.springbootneo4j;

import com.example.springbootneo4j.entities.Department;
import com.example.springbootneo4j.entities.Student;
import com.example.springbootneo4j.entities.Subject;
import com.example.springbootneo4j.repositories.DepartmentRepository;
import com.example.springbootneo4j.repositories.StudentRepository;
import com.example.springbootneo4j.repositories.SubjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;

@SpringBootApplication
@EnableNeo4jRepositories
public class SpringBootNeo4jApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootNeo4jApplication.class, args);
        //System.exit(0);
    }

    @Bean
    CommandLineRunner demo(StudentRepository studentRepository,
                           SubjectRepository subjectRepository, DepartmentRepository departmentRepository) {
        return args -> {

            //delete previous data


//            departmentRepository.deleteAll();
//            subjectRepository.deleteAll();
//            studentRepository.deleteAll();


            Department deptMath = new Department("Math");
            Department deptScience = new Department("Science");

            Subject math = new Subject("math", deptMath);
            Subject info = new Subject("info", deptMath);
            Subject pc = new Subject("pc",deptScience);
            Subject svt = new Subject("svt",deptScience);

            List<Subject> subjects = new ArrayList<>();
            subjects.add(math);
            subjects.add(info);
            subjects.add(pc);
            subjects.add(svt);
            Student student = new Student("Youssef El Goumri", subjects);
            studentRepository.save(student);

        };
    }
}
