package com.example.springbootneo4j.repositories;

import com.example.springbootneo4j.entities.Department;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface DepartmentRepository extends Neo4jRepository<Department, Long> {
}
