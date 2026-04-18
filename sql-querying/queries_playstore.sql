SELECT * 
FROM analytics 
WHERE id = 1880;

SELECT id, app_name 
FROM analytics 
WHERE last_updated = '2018-08-01';

SELECT category, COUNT(*) 
FROM analytics 
GROUP BY category;

SELECT app_name, reviews 
FROM analytics 
ORDER BY reviews DESC 
LIMIT 5;

SELECT app_name 
FROM analytics 
WHERE rating >= 4.8 
ORDER BY reviews DESC 
LIMIT 1;

SELECT category, AVG(rating) 
FROM analytics 
GROUP BY category 
ORDER BY avg(rating) DESC;

SELECT app_name, price, rating 
FROM analytics 
WHERE rating < 3 
ORDER BY price DESC 
LIMIT 1;

SELECT app_name 
FROM analytics 
WHERE rating IS NOT NULL 
	AND min_installs <= 50 
ORDER BY rating DESC;

SELECT app_name 
FROM analytics 
WHERE rating < 3
	AND reviews >= 10000;

SELECT app_name 
FROM analytics
WHERE price >= .10
	AND price <= 1.00
ORDER BY reviews DESC 
LIMIT 10;

SELECT app_name, last_updated
FROM analytics
ORDER BY last_updated ASC
LIMIT 1;

SELECT app_name
FROM analytics 
ORDER BY price DESC
LIMIT 1;

SELECT SUM(reviews)
FROM analytics;

SELECT category, COUNT(*)
FROM analytics
GROUP BY category
HAVING count(*) > 300;

SELECT app_name, reviews, min_installs,
       min_installs::float / reviews AS proportion
FROM analytics
WHERE min_installs >= 100000
  AND reviews > 0
ORDER BY proportion DESC
LIMIT 1;
