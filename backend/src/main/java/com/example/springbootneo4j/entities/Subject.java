package com.example.springbootneo4j.entities;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.util.List;

@Node
public class Subject {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Relationship(type = "BELONGS_TO")
    private Department department;

    public Subject() {

    }

    public Subject(String name) {
        this.name = name;
    }
    public Subject(String name, Department department) {
        this.name = name;
        this.department = department;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}