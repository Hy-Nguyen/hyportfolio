import { Body, Container, Head, Hr, Html, Preview, Section, Text, Tailwind } from '@react-email/components';

interface OutreachConfirmationProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function OutreachConfirmation(props: OutreachConfirmationProps) {
  const { firstName, lastName, email, message } = props;
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>You have a new outreach!</Preview>
        <Body className="bg-[#f6f9fc] font-sans">
          <Container className="mx-auto mb-16 bg-white py-5">
            <Section className="px-12">
              <Text className="mb-5 text-2xl font-bold text-[#333]">
                Message from {firstName} {lastName}
              </Text>
              <Text className="rounded-md bg-[#6b7794] p-2 text-left text-lg leading-6 text-white">
                Message: {message}
              </Text>
              <Text className="text-left text-base leading-6 text-[#525f7f]">Email: {email}</Text>

              <Hr className="my-5 border-t border-[#e6ebf1]" />
              <Text className="text-xs leading-4 text-[#8898aa]">Hy Nguyen, Glendale, AZ</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
