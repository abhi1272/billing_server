import express from 'express'
import mongoose from 'mongoose'

import SupportModel from '../models/Support.js'

export const createSupport = async (req, res) => {
    const support = req.body

    const newSupport = new SupportModel(support);

    try {
        await newSupport.save()
        res.status(201).json(newSupport);
    } catch (error) {
        res.status(409).json(error.message)
    }
};