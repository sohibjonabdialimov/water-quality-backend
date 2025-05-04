const Root = require("../models/Root");

exports.getAllRoot = async (req, res) => {
  try {
    const root = await Root.find({}, "temperature tds waterLevel createdAt updatedAt");
    res.status(200).json(root);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.getRootById = async (req, res) => {
  try {
    const root = await Root.findById(req.params.id);

    if (!root) {
      return res.status(404).json({
        message: "Root not found",
      });
    }

    res.status(200).json(root);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.createRoot = async (req, res) => {
  try {
    const {
      temperature,
      tds,
      waterLevel
    } = req.body;

    const root = new Root({
      temperature,
      tds,
      waterLevel
    });

    await root.save();
    res.status(201).json({
      data: {
        message: "Root created successfully",
        root: {
          temperature,
          tds,
          waterLevel,
          createdAt: root.createdAt,
          updatedAt: root.updatedAt,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Invalid data",
      error: error.message,
    });
  }
};

exports.updateRoot = async (req, res) => {
  try {
    const updatedRoot = await Root.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedRoot) {
      return res.status(404).json({
        message: "Root not found",
      });
    }

    res.status(200).json(updatedRoot);
  } catch (error) {
    res.status(400).json({
      message: "Invalid data",
      error,
    });
  }
};

exports.patchRoot = async (req, res) => {
  try {
    const patchedRoot = await Root.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!patchedRoot) {
      return res.status(404).json({
        message: "Root not found",
      });
    }

    res.status(200).json(patchedRoot);
  } catch (error) {
    res.status(400).json({
      message: "Invalid data",
      error,
    });
  }
};
exports.deleteRoot = async (req, res) => {
  try {
    const deletedRoot = await Root.findByIdAndDelete(req.params.id);

    if (!deletedRoot) {
      return res.status(404).json({
        message: "Root not found",
      });
    }

    res.status(200).json({
      message: "Root deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};