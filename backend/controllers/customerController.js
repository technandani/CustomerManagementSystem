const Customer = require("../models/Customer");

// Get all customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate("membershipID", "name");
    res.status(200).json({
      success: true,
      message: "Customers fetched successfully.",
      customers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch customers.",
      error: error.message,
    });
  }
};

// Get a single customer by id
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate("membershipID", "name");

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Customer fetched successfully.",
      customer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch customer.",
      error: error.message,
    });
  }
};

// Create a customer
const createCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNumber, status, membershipID } = req.body;

    if (!firstName || !lastName || !email || !contactNumber) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and contact number are required.",
      });
    }

    const newCustomer = new Customer({ firstName, lastName, email, contactNumber, status, membershipID });
    await newCustomer.save();

    res.status(201).json({
      success: true,
      message: "Customer created successfully.",
      customer: newCustomer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create customer.",
      error: error.message,
    });
  }
};

// Update customer
const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedCustomer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Customer updated successfully.",
      customer: updatedCustomer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update customer.",
      error: error.message,
    });
  }
};

// Delete customer
const deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);

    if (!deletedCustomer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete customer.",
      error: error.message,
    });
  }
};

module.exports = { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };