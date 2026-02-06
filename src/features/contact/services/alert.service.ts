
import type { ContactRequest } from '@/payload-types'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * AlertService
 * 
 * SRP: Responsibile ONLY for sending system alerts/notifications.
 * It does not handle database persistence or validation.
 */
export class AlertService {
  static async sendAdminNotification(request: ContactRequest) {
    // In a real app, this would use an EmailProvider (DIP)
    // For now, we simulate logging and potentially creating a notification record
    
    console.log(`[AlertService] New Contact Request from ${request.email}: ${request.subject}`)
    
    // Example: triggering an internal notification system
    // const payload = await getPayload({ config })
    // await payload.sendEmail(...) 
  }
}
