const Feedback = require('../models/feedbackModel');

exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({}, 'name email phone message');
    res.status(200).json(feedbacks);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server Error',
      error
    });
  }
};

exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        message: 'Feedback not found'
      });
    }

    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error
    });
  }
};

exports.createFeedback = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      message,
    } = req.body;

    const feedback = new Feedback({
      name,
      email,
      phone,
      message,
    });

    await feedback.save();
    res.status(201).json({
      data: {
        success: true,
        message: 'Feedback created successfully',
        feedback: {
          name,
          email,
          phone,
          message,
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'Invalid data',
      error: error.message
    });
  }
};


exports.deleteFeedback = async (req, res) => {
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);

    if (!deletedFeedback) {
      return res.status(404).json({
        message: 'Feedback not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Feedback deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error
    });
  }
};