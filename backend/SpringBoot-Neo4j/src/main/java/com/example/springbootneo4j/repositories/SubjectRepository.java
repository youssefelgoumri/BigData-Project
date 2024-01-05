package com.example.springbootneo4j.repositories;

import com.example.springbootneo4j.entities.Subject;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface SubjectRepository extends Neo4jRepository<Subject, Long> {
}
