-- Comments in SQL Start with dash-dash --
SELECT * FROM analytics  WHERE id = 1880;
SELECT id, app_name FROM analytics WHERE last_updated = 'August 01, 2018';
SELECT category,COUNT (*) FROM analytics GROUP BY category;
SELECT app_name,reviews FROM analytics ORDER BY reviews desc LIMIT 5 ;
SELECT app_name,reviews FROM analytics WHERE rating >=4.8 ORDER BY reviews desc LIMIT 1 ;
SELECT app_name,reviews,rating FROM analytics WHERE rating >=4.8 ORDER BY reviews desc LIMIT 1 ;
SELECT category,AVG(rating) FROM analytics GROUP BY category ORDER BY avg desc;
SELECT app_name,price,rating FROM analytics WHERE rating < 3 ORDER BY price desc;
SELECT rating,app_name FROM analytics ORDER BY AVG(rating) desc;
SELECT * FROM analytics ORDER BY last_updated LIMIT 1;
SELECT * FROM analytics ORDER BY price desc LIMIT 1;
SELECT SUM(reviews) FROM analytics;
SELECT category FROM analytics GROUP BY category HAVING COUNT(*) > 300;  
SELECT app_name, reviews, min_installs, min_installs / reviews AS proportions  FROM analytics WHERE
min_installs >= 100000 ORDER BY proportions desc LIMIT 1; 