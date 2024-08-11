const express = require('express');
const { createTicket, getTickets, respondToTicket,getNotifications } = require('../controller/ticketController');
const { authenticateUser, authorizeRole } = require('../middleware/auth');
const router = express.Router();

router.get('/notifications', authenticateUser, authorizeRole(['admin']), getNotifications);

router.post('/create', authenticateUser, createTicket);
router.get('/all', authenticateUser, authorizeRole(['admin']), getTickets);
router.patch('/respond/:ticketId', authenticateUser, authorizeRole(['admin']), respondToTicket);

module.exports = router;
