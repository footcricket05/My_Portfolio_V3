import { Router, type IRouter } from "express";
import { SendContactMessageBody } from "@workspace/api-zod";
import { sendContactEmail } from "../lib/email.js";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parseResult = SendContactMessageBody.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, email, subject, message } = parseResult.data;

  try {
    await sendContactEmail(name, email, subject, message);

    req.log.info({ email }, "Contact email sent");
    res.status(201).json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
