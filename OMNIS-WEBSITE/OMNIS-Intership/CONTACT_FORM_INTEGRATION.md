# OMNIS Contact Form Integration

## 🎯 Overview

The OMNIS website contact form has been integrated with Google Sheets to automatically save form submissions. This integration provides:

- ✅ Real-time form submission to Google Sheets
- ✅ Form validation on both client and server side
- ✅ Success/error notifications
- ✅ Responsive design for all devices
- ✅ No page redirects - everything happens on the same page

## 📁 Files Involved

### Frontend Components
- `src/components/contact-form.tsx` - React contact form component
- `src/app/page.tsx` - Main page using the contact form

### Backend API
- `src/app/api/contact/route.ts` - Next.js API endpoint for form processing

### Google Apps Script
- `google-apps-script.js` - Google Apps Script code for Sheet integration
- `GOOGLE_SHEETS_SETUP.md` - Complete setup instructions

### Configuration
- `.env.example` - Environment variables template
- `test-contact-api.js` - API testing script

## 🚀 Quick Start

1. **Follow the setup guide**: `GOOGLE_SHEETS_SETUP.md`
2. **Deploy the Google Apps Script** to get your Web App URL
3. **Configure the environment** with your Google Apps Script URL
4. **Test the integration** using the contact form on your website

## 📋 Form Fields

The contact form collects the following information:

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | Text | ✅ | Non-empty |
| Email | Email | ✅ | Valid email format |
| Subject | Text | ✅ | Non-empty |
| Message | Textarea | ✅ | Non-empty |

## 🔄 How It Works

1. **User fills out the form** on the OMNIS website
2. **Client-side validation** checks for required fields and email format
3. **Form submission** sends data to `/api/contact` endpoint
4. **Server-side validation** double-checks the data
5. **Google Apps Script** receives the data and saves it to Google Sheets
6. **Success notification** appears to the user
7. **Form resets** for the next submission

## 🛡️ Security Features

- **Input validation** on both client and server side
- **Email format verification**
- **XSS protection** through proper sanitization
- **Rate limiting ready** (can be added to API endpoint)
- **HTTPS required** for production deployment

## 📊 Data Storage

Form submissions are stored in Google Sheets with the following columns:

| Column | Description |
|--------|-------------|
| Timestamp | ISO 8601 timestamp |
| Name | Submitting user's name |
| Email | Submitting user's email |
| Subject | Message subject |
| Message | Full message content |
| Source | "OMNIS Website" |
| Date Submitted | Human-readable date |
| Locale | User's locale information |

## 🎨 User Experience

### Success State
- Green notification box with checkmark icon
- "Thank you for your message! We'll get back to you within 24 hours."
- Form automatically resets

### Error State
- Red notification box with alert icon
- Specific error message (validation, network, or server error)
- Form data is preserved for retry

### Loading State
- Submit button shows loading spinner
- "Sending..." text
- Form is disabled during submission

## 🧪 Testing

### Manual Testing
1. Visit the contact section of the website
2. Fill out all form fields with valid data
3. Click "Send Message"
4. Verify success notification appears
5. Check Google Sheet for new entry

### API Testing
```bash
# Run the test script
node test-contact-api.js
```

### Validation Testing
- Try submitting empty fields
- Try invalid email format
- Test network interruption
- Verify error handling

## 🔧 Customization

### Adding New Fields
1. Add field to `ContactForm` component
2. Add field to API route validation
3. Google Apps Script automatically handles new fields

### Changing Notifications
Edit the success/error messages in `contact-form.tsx`

### Styling Changes
Modify the CSS classes in the contact form component using the OMNIS color scheme

## 🚨 Troubleshooting

### Common Issues

**Form not submitting:**
- Check browser console for JavaScript errors
- Verify API endpoint is accessible
- Check network connection

**Data not appearing in Google Sheet:**
- Verify Google Apps Script is deployed correctly
- Check Web App URL in environment variables
- Review Google Apps Script execution logs

**Validation errors:**
- Ensure all required fields are filled
- Check email format is valid
- Verify field names match between frontend and backend

### Debug Mode

Add console logging to the API route for debugging:
```typescript
console.log('Form submission received:', formData);
```

## 📈 Monitoring

- **Google Sheet**: Monitor for new submissions
- **Browser Console**: Check for JavaScript errors
- **Network Tab**: Verify API requests/responses
- **Google Apps Script**: Review execution logs

## 🔮 Future Enhancements

- **Email notifications** to administrators
- **File upload** support
- **CAPTCHA integration** for spam protection
- **Analytics tracking** for form submissions
- **Auto-response emails** to users

---

**Support**: If you encounter any issues, refer to `GOOGLE_SHEETS_SETUP.md` or check the browser console for error messages.