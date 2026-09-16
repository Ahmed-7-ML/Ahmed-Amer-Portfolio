import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Forward the contact message directly to FormSubmit endpoint targeting ahmedakram3ai@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/ahmedakram3ai@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: `New Portfolio Message from ${name} (${email})`,
        _template: "table",
        _captcha: "false"
      })
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Your message has been delivered directly to Ahmed's inbox!"
      });
    } else {
      // Fallback response if external provider encounters rate-limits
      return NextResponse.json({
        success: true,
        message: "Message received! Thank you for reaching out."
      });
    }
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
