package com.example.springbootneo4j.services;

import com.example.springbootneo4j.entities.Department;
import com.example.springbootneo4j.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {
    private DepartmentRepository departmentRepository;

    @Autowired
    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Department getDepartmentById(Long id) {
        return departmentRepository.findById(id).orElse(null);
    }

    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }

    public Department updateDepartment(Long id, Department updatedDepartment) {
        Department newDepartment = null;
        if (departmentRepository.existsById(id)) {
            newDepartment = getDepartmentById(id);
            newDepartment.setId(id);
            newDepartment.setName(updatedDepartment.getName());
            return departmentRepository.save(newDepartment);
        }
        return newDepartment;
    }

    public void deleteDepartment(Long id) {
        departmentRepository.deleteById(id);
    }
}
