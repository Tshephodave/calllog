const Ticket = require('../model/Ticket');
const User = require('../model/User');
const Notification = require('../model/Notification');

async function createTicket(req, res) {
  try {
    const { issue, machineDescription, priority } = req.body;
    const user = await User.findById(req.user.userId);

    const newTicket = new Ticket({
      user: req.user.userId,
      name: user.name,
      phone: user.phone,
      department: user.department,
      email: user.email,
      issue,
      machineDescription,
      priority,
    });

    await newTicket.save();
    const adminNotification = new Notification({
      message: `New ticket created by ${user.name}`,
      user: req.user.userId,
    });

    await adminNotification.save();

    res.status(201).json({ message: 'Ticket created successfully', ticket: newTicket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getTickets(req, res) {
  try {
    const tickets = await Ticket.find().populate('user', '-password');
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function respondToTicket(req, res) {
  try {
    const { ticketId } = req.params;
    const { status } = req.body;
    
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket.status = status;
    await ticket.save();
    
    res.status(200).json({ message: 'Ticket updated successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function getNotifications(req, res) {
  try {
    const notifications = await Notification.find({ user: req.user.userId }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = { createTicket, getTickets, respondToTicket,getNotifications };
