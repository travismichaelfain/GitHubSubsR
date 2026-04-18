SELECT *
FROM owners o
FULL JOIN vehicles v
ON o.id = v.owner_id;

SELECT o.first_name, o.last_name, COUNT(v.id)
FROM owners o
LEFT JOIN vehicles v
ON o.id = v.owner_id
GROUP BY o.id, o.first_name, o.last_name
ORDER BY COUNT(v.id);

SELECT o.first_name,
		o.last_name,
		AVG(v.price)::int AS average_price,
		COUNT(v.id)
FROM owners o
JOIN vehicles v
ON o.id = v.owner_id
GROUP BY o.id, o.first_name, o.last_name
HAVING AVG(v.price) > 10000
	AND COUNT(v.id) > 1
ORDER BY AVG(v.price) DESC;
