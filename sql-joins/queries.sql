-- write your queries here
 SELECT * FROM owners JOIN vehicles ON vehicles.owner_id = owners.id;
 SELECT first_name, last_name,  COUNT( * ) FROM owners JOIN vehicles ON vehicles.owner_id = owners.id GROUP BY owners.id;
 SELECT first_name, last_name, AVG(price)  COUNT( * ) FROM owners JOIN vehicles ON vehicles.owner_id = owners.id GROUP BY owners.id;
  SELECT first_name, last_name, AVG(price), COUNT(*) FROM owners JOIN vehicles on owners.id = vehicles.owner_id GROUP BY first_name, last_name  HAVING AVG(price) > 10000 ORDER BY first_name desc;