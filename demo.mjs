import {beautifyAndColorizeSQL} from './dist/index.js'

const sqlQuery = "SELECT u.user_id, u.username, COUNT(o.order_id) AS total_orders, SUM(oi.quantity * p.price) AS total_spent, AVG(r.rating) AS avg_rating FROM users u LEFT JOIN orders o ON u.user_id = o.user_id LEFT JOIN order_items oi ON o.order_id = oi.order_id LEFT JOIN products p ON oi.product_id = p.product_id LEFT JOIN reviews r ON u.user_id = r.user_id WHERE u.registration_date >= '2023-01-01' AND u.status = 'active' GROUP BY u.user_id, u.username HAVING COUNT(o.order_id) > 5 OR SUM(oi.quantity * p.price) > 1000 ORDER BY total_spent DESC, avg_rating DESC LIMIT 100";

console.log(beautifyAndColorizeSQL(sqlQuery));