CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO burgers
  (burger_name)
VALUES
  ('St Elmos Fire-Broiled Burger'),
  ('Sixteen Oz Candles Burger'),
  ('The Breakfast Burger Club');
  SELECT * FROM burgers