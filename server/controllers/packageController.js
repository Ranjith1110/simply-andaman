import Package from "../models/Package.js";

export const createPackage = async (req, res) => {
    try {
        const { title, location, desc, trend, price, img, category } = req.body;

        if (!title || !price || !category) {
            return res.status(400).json({ message: "Title, price, and category are required." });
        }

        const newPackage = new Package({
            title, location, desc, trend, price, img, category,
        });

        const savedPackage = await newPackage.save();
        res.status(201).json(savedPackage);

    } catch (error) {
        console.error("Error creating package:", error);
        res.status(500).json({ message: "Server Error: Could not create package." });
    }
};

export const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find({});
        res.status(200).json(packages);
    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ message: "Server Error: Could not fetch packages." });
    }
};

export const updatePackage = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, location, desc, trend, price, img, category } = req.body;

        const updatedPackage = await Package.findByIdAndUpdate(
            id,
            { title, location, desc, trend, price, img, category },
            { new: true, runValidators: true }
        );

        if (!updatedPackage) {
            return res.status(404).json({ message: "Package not found." });
        }
        res.status(200).json(updatedPackage);

    } catch (error) {
        console.error("Error updating package:", error);
        res.status(500).json({ message: "Server Error: Could not update package." });
    }
};

export const deletePackage = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPackage = await Package.findByIdAndDelete(id);

        if (!deletedPackage) {
            return res.status(404).json({ message: "Package not found." });
        }
        res.status(200).json({ message: "Package deleted successfully." });

    } catch (error) {
        console.error("Error deleting package:", error);
        res.status(500).json({ message: "Server Error: Could not delete package." });
    }
};