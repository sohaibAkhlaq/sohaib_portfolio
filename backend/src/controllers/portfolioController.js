import Portfolio from '../models/Portfolio.js';
import Message from '../models/Message.js';

// @desc    Get all portfolio data
// @route   GET /api/portfolio
// @access  Public
export const getPortfolioData = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne(); // We only expect one main document

        if (portfolio) {
            res.json(portfolio);
        } else {
            res.status(404).json({ message: 'Portfolio data not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Submit a contact message
// @route   POST /api/messages
// @access  Public
export const submitMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        const newMessage = await Message.create({
            name,
            email,
            subject,
            message
        });

        res.status(201).json({ message: 'Message sent successfully!', data: newMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error. Message not sent.' });
    }
};
