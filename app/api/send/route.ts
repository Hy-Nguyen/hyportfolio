import EmailTemplate from '../../../features/ContactForm/email/outreach-overview';
import OutreachConfirmation from '../../../features/ContactForm/email/outreach-confirmation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, message } = await req.json();

  try {
    const { data, error } = await resend.batch.send([
      {
        from: 'Hy Nguyen <hy@hy-nguyen.com>',
        to: [email],
        subject: 'Portfolio Outreach',
        react: EmailTemplate({ firstName, lastName, email, message }),
      },
      {
        from: 'Hy Nguyen <hy@hy-nguyen.com>',
        to: [email],
        subject: 'Portfolio Outreach',
        react: OutreachConfirmation({ firstName, lastName, email, message }),
      },
    ]);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
