package com.example.springbootneo4j.services;

import com.example.springbootneo4j.entities.Subject;
import com.example.springbootneo4j.repositories.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectService {
    private SubjectRepository subjectRepository;

    @Autowired
    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    public Subject getSubjectById(Long id) {
        return subjectRepository.findById(id).orElse(null);
    }

    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    public Subject updateSubject(Long id, Subject updatedSubject) {
        Subject newSubject= null;
        if (subjectRepository.existsById(id)) {
            newSubject = getSubjectById(id);
            newSubject.setId(id);
            newSubject.setName(updatedSubject.getName());
            newSubject.setDepartment(updatedSubject.getDepartment());
            return subjectRepository.save(newSubject);
        }
        return newSubject;
    }

    public void deleteSubject(Long id) {
        subjectRepository.deleteById(id);
    }
}
