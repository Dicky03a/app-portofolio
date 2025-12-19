<!DOCTYPE html>
<html>
<head>
    <title>Contact Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .email-header {
            background-color: #4f46e5;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .email-body {
            padding: 30px;
        }
        .contact-info {
            background-color: #f9fafb;
            border-left: 4px solid #4f46e5;
            padding: 15px;
            margin: 20px 0;
        }
        .contact-field {
            margin-bottom: 10px;
        }
        .contact-label {
            font-weight: bold;
            color: #374151;
        }
        .contact-value {
            color: #6b7280;
        }
        .email-footer {
            background-color: #f3f4f6;
            padding: 15px;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Contact Message</h1>
            <p>A new message from your portfolio website</p>
        </div>
        
        <div class="email-body">
            <h2>New Contact Message</h2>
            <p>You have received a new contact message from your portfolio website.</p>
            
            <div class="contact-info">
                <div class="contact-field">
                    <span class="contact-label">Name:</span>
                    <span class="contact-value">{{ $name }}</span>
                </div>
                <div class="contact-field">
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">{{ $email }}</span>
                </div>
                <div class="contact-field">
                    <span class="contact-label">Subject:</span>
                    <span class="contact-value">{{ $subject }}</span>
                </div>
                <div class="contact-field">
                    <span class="contact-label">Message:</span>
                    <span class="contact-value">{{ $message }}</span>
                </div>
            </div>
            
            <p>Please respond to this message at your earliest convenience.</p>
        </div>
        
        <div class="email-footer">
            <p>This email was sent from your portfolio website contact form.</p>
        </div>
    </div>
</body>
</html>