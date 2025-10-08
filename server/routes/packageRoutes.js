import express from "express";
import {
    createPackage,
    getAllPackages,
    updatePackage,
    deletePackage
} from "../controllers/packageController.js";

const router = express.Router();

router.route("/")
    .get(getAllPackages)
    .post(createPackage);

router.route("/:id")
    .put(updatePackage)
    .delete(deletePackage);

export default router;