import { number } from '@hapi/joi'
import mongoose from 'mongoose'

const siteSchema = new mongoose.Schema({
    accessible: Boolean,
    account_status: String,
    active: Boolean,
    created_at: DateTime,
    created_by: ID,
    default_language: String,
    delete: Boolean,
    deleted_at: DateTime,
    googleAnalyticsCode: String,
    name: String,
    payment_status: String,
    payment_status_id: String,
    subcription_id: ID,
    suspended: Boolean,
    updated_at: DateTime
})

const Site = mongoose.model('Site', siteSchema)
module.exports = Site;