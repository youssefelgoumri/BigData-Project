package com.example.springbootneo4j.services;

import com.example.springbootneo4j.entities.Student;
import com.example.springbootneo4j.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student updatedStudent) {
        Student newStudent = null;
        if (studentRepository.existsById(id)) {
            newStudent = getStudentById(id);
            newStudent.setId(id);
            newStudent.setName(updatedStudent.getName());
            newStudent.setSubjects(updatedStudent.getSubjects());
            return studentRepository.save(newStudent);
        }
        return newStudent;
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
