package de.neuefische.backend.repository;
import de.neuefische.backend.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository <Product, String> {
    List<Product> findByCategory(String category);
}
