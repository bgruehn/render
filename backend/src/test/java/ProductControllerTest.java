import de.neuefische.backend.controller.ProductController;
import de.neuefische.backend.model.Product;
import de.neuefische.backend.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = ProductController.class)
public class ProductControllerTest {

    @MockBean
    private ProductRepository productRepository;

    @Test
    public void testGetAllProducts() {
        List<Product> productList = new ArrayList<>();
        productList.add(new Product("1", "Product 1", 10, 10.0, "Category 1"));
        productList.add(new Product("2", "Product 2", 20, 20.0, "Category 2"));

        when(productRepository.findAll()).thenReturn(productList);

        ProductController productController = new ProductController(productRepository);
        List<Product> result = productController.getAllProducts();

        assertEquals(2, result.size());
    }

    @Test
    public void testAddProduct() {
        Product newProduct = new Product("3", "New Product", 15, 15.0, "Category 3");

        when(productRepository.save(newProduct)).thenReturn(newProduct);

        ProductController productController = new ProductController(productRepository);
        Product addedProduct = productController.addProduct(newProduct);

        assertEquals(newProduct, addedProduct);
    }

    @Test
    public void testDeleteProductById() {
        String productId = "3";
        Product deletedProduct = new Product(productId, "Deleted Product", 25, 25.0, "Category 4");

        when(productRepository.findById(productId)).thenReturn(Optional.of(deletedProduct));

        ProductController productController = new ProductController(productRepository);
        productController.deleteProductById(productId);

        verify(productRepository).deleteById(productId);
    }
}