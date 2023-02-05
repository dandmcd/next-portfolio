import { ContactSection } from "../../styles/contactstyle";
import HeadSeo from "../HeadSeo";
import siteMetadata from "../../lib/siteMetadata";
import { CommonTitle } from "../../styles/styledCommon";

export default function ContactSubmitted() {
  return (
    <>
      <HeadSeo
        title={`Contact | ${siteMetadata.title} `}
        canonicalUrl={`${siteMetadata.siteUrl}/contact`}
      />
      <ContactSection>
        <CommonTitle>
          Message successfully sent! We will be in touch.
        </CommonTitle>
      </ContactSection>
    </>
  );
}
