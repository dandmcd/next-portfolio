import Link from "next/link";
import { CommonTitle } from "../../styles/styledCommon";
import { useForm, ValidationError } from "@formspree/react";
import ContactSubmitted from "../../components/Contact/ContactSubmitted";

import {
  Form,
  Input,
  InputMsg,
  EmailSmHeader,
  EmailExSmHeader,
  Paragraph,
  SubmitButton,
  ContactSection,
  EmailSection,
  EmailDiv,
  EmailButton,
  SubmitContainer,
} from "../../styles/contactstyle";
import HeadSeo from "../../components/HeadSeo";
import siteMetadata from "../../lib/siteMetadata";

export default function Contact() {
  const [state, handleSubmit] = useForm("xvonzeje");
  if (state.succeeded) {
    return <ContactSubmitted />;
  }
  return (
    <>
      <HeadSeo
        title={`Contact | ${siteMetadata.title} `}
        canonicalUrl={`${siteMetadata.siteUrl}/contact`}
      />
      <ContactSection>
        <CommonTitle>Let&apos;s get in touch.</CommonTitle>
        <EmailSection>
          <EmailDiv>
            <EmailSmHeader>Contact me by email:</EmailSmHeader>
            <Link href="mailto:dandmcd@gmail.com">
              <EmailButton>dandmcd@gmail.com</EmailButton>
            </Link>
          </EmailDiv>
        </EmailSection>

        <Form onSubmit={handleSubmit} name="contact">
          <EmailSmHeader>No time for email? </EmailSmHeader>
          <EmailExSmHeader>
            Fill in the easy contact form below:
          </EmailExSmHeader>
          <Paragraph>
            <label>
              Your Name: <Input type="text" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </label>
          </Paragraph>
          <Paragraph>
            <label>
              Your Email: <Input type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
          </Paragraph>
          <Paragraph>
            <label>
              Message: <InputMsg name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>
          </Paragraph>
          <SubmitContainer>
            <SubmitButton type="submit" disabled={state.submitting}>
              Send
            </SubmitButton>
          </SubmitContainer>
        </Form>
      </ContactSection>
    </>
  );
}
