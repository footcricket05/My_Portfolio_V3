import { Router, type IRouter } from "express";
import { db, contactMessages } from "@workspace/db";
import { SendContactMessageBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parseResult = SendContactMessageBody.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, email, subject, message } = parseResult.data;

  try {
    const [inserted] = await db
      .insert(contactMessages)
      .values({ name, email, subject, message })
      .returning({ id: contactMessages.id });

    req.log.info({ id: inserted.id, email }, "Contact message received");
    res.status(201).json({
      success: true,
      id: inserted.id,
      message: "Thanks for reaching out! I'll get back to you soon.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact message");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
