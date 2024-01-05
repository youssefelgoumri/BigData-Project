package com.example.springbootneo4j.repositories;

import com.example.springbootneo4j.entities.Student;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface StudentRepository extends Neo4jRepository<Student, Long> {
}
