CREATE TABLE presentations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  created TIMESTAMP NOT NULL
)
