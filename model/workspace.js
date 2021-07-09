import { number } from '@hapi/joi'
import mongoose from 'mongoose'

const workspaceSchema = new mongoose.Schema({
    accessible: Boolean,
    active: Boolean,
    color_code: String,
    created_at: DateTime,
    created_by: ID,
    default_language: String,
    delete: Boolean,
    deleted_at: DateTime,
    display_name: String,
    display_order: Int,
    is_owner: Boolean,
    name: String,
    new_business: Boolean,
    site_id: Site,
    time_zone: String,
    type: String,
    updated_at: DateTime
})

const Workspace = mongoose.model('Workspace', workspaceSchema)
module.exports = Workspace;