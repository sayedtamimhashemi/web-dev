# Email Setup Instructions

To receive email inquiries from the contact form at **fashionliza22@gmail.com**, you need to set up EmailJS.

## Quick Setup Steps:

1. **Sign up for EmailJS** (Free account available)
   - Go to https://www.emailjs.com/
   - Create a free account

2. **Create an Email Service**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose Gmail (or your email provider)
   - Connect your email account (fashionliza22@gmail.com)
   - Copy the **Service ID**

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use this template:
   
   ```
   Subject: New Online Order Inquiry from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   
   ---
   Reply to: {{reply_to}}
   ```
   
   - Save and copy the **Template ID**

4. **Get your Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Add Environment Variables**
   - Create a `.env` file in the project root
   - Add these lines:
   
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
   
   - Replace the placeholder values with your actual IDs and key

6. **Restart the Development Server**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

## Note:
If EmailJS is not configured, the form will use a mailto: link as a fallback, which opens the user's email client.

