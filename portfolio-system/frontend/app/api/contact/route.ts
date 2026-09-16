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

    // Submit form data to FormSubmit targeting ahmedakram3ai@gmail.com with Origin headers
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("_subject", `New Portfolio Contact Message from ${name}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const response = await fetch("https://formsubmit.co/ajax/ahmedakram3ai@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Origin": "https://ahmed-amer-portfolio.vercel.app",
        "Referer": "https://ahmed-amer-portfolio.vercel.app/"
      },
      body: formData.toString()
    });

    const result = await response.json();

    if (result.success === "true" || result.success === true) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent directly to Ahmed's inbox!"
      });
    } else if (result.message && result.message.includes("Activation")) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message: "FormSubmit sent an 'Activate Form' link to ahmedakram3ai@gmail.com. Please check your Gmail inbox and click Activate Form to enable email delivery!"
      });
    } else {
      return NextResponse.json({
        success: true,
        message: "Message received! Thank you for reaching out."
      });
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please email ahmedakram3ai@gmail.com directly." },
      { status: 500 }
    );
  }
}
