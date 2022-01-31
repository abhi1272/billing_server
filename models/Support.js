import mongoose from 'mongoose'

const supportSchema = mongoose.Schema({
    type: { type: String, required: true },
    message: { type: String, required: true },
    isResolved: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    resolvedAt: {
        type: Date
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Support = mongoose.model('Support', supportSchema)

export default Support