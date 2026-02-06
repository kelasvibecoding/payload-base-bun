
import type { CollectionAfterChangeHook } from 'payload'
import { AlertService } from '../services/alert.service'

/**
 * ContactHooks
 * 
 * FBA + SOLID:
 * - Lives in features/contact (FBA)
 * - Acts as an adapter between Payload's Hook API and our Domain Services (DIP/SRP)
 */
export const notifyAdminOnCreate: CollectionAfterChangeHook = async ({ doc, operation, req }) => {
  if (operation === 'create') {
    // Delegate to the domain service
    // We pass 'doc' which is the ContactRequest data
    await AlertService.sendAdminNotification(doc)
    
    req.payload.logger.info(`Notification service triggered for contact ${doc.id}`)
  }
  
  return doc
}
