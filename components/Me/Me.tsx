import Link from "next/link";
import Image from "next/image";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import React, { useRef } from 'react';

// Components
import HeadSeo from "../HeadSeo";

// Styled Components
import {
  Cta,
  Header,
  Wrapper,
  Title,
  IntroSection,
  IntroBox,
  Intro,
  MeImg,
  CtaBtns,
  BlogEntry,
  BlogSpan,
  MediaIcons,
  Social,
  ViewButton,
} from "./style";

// Hooks
import useRandomSubtitle from "../../hooks/useRandomSubtitle";

// Lib
import siteMetadata from "../../lib/siteMetadata";

// Types
import { Document } from '@contentful/rich-text-types';
import { TypeDmPortfolioBlogFields, TypeHomeFields } from "../../lib/content-types";

const Me = ({ blogPost, content }: { blogPost: TypeDmPortfolioBlogFields, content: TypeHomeFields }) => {
  const fallbackSubtitles = ["Back To Front", "Dev Ready To Dev Complete"];

  const randomSubtitle = useRandomSubtitle(
    content?.subtitles?.length ? content.subtitles : fallbackSubtitles
  );

  const bioHtml = content?.bio ? documentToHtmlString(content?.bio as unknown as Document) : '';

  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);

  const handleResumeDownload = async (resumeUrl: string) => {
    try {
      const response = await fetch(resumeUrl);

      if (!response.ok) throw new Error('File download failed.');

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      if (downloadLinkRef.current) {
        downloadLinkRef.current.href = downloadUrl;
        downloadLinkRef.current.click();
      }

      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error downloading the resume:', error);
    }
  };

  return (
    <>
      <HeadSeo
        title="Daniel.Me"
        description={content?.metaDescription}
        canonicalUrl={siteMetadata.siteUrl}
      />
      <a
        ref={downloadLinkRef}
        style={{ display: 'none' }}
        download="resume.pdf"
      >
        Download
      </a>
      <Cta>
        <Header>
          <Title>{content?.heroTitle}</Title>
          <Title subtitle>{randomSubtitle}</Title>
        </Header>
        <Wrapper>
          <IntroSection>
            <Social>
              <MediaIcons>
                {content?.icons && content.icons.map((icon, index) => {
                  const isResumeIcon = icon.fields.link?.fields.link?.includes('resume');
                  if (isResumeIcon) {
                    return (
                      <button
                        key={index}
                        onClick={() => handleResumeDownload(`https:${content.resumeFile?.fields?.file?.url}`)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Download Resume"
                        title="Download Resume"
                      >
                        <Image
                          src={`https:${icon.fields.icon?.fields.file.url}`}
                          width="32"
                          height="32"
                          alt={icon.fields.icon?.fields.title || "Resume Icon"}
                        />
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      href={icon.fields.link?.fields.link || "#"}
                      rel="noopener noreferrer"
                      target={icon.fields.link?.fields.openInNewTab ? '_blank' : '_self'}
                      title={icon.fields.icon?.fields.title || "Icon"}
                    >
                      <Image
                        src={`https:${icon.fields.icon?.fields.file.url}`}
                        width="32"
                        height="32"
                        alt={icon.fields.icon?.fields.title || "Icon"}
                      />
                    </Link>
                  );
                })}
              </MediaIcons>
              <MeImg
                as={MeImg}
                alt="Img"
                src={`https:${content.profileImage?.fields?.file?.url}`}
                width="150"
                height="150"
                priority
              />
            </Social>
            <IntroBox>
              <Intro
                dangerouslySetInnerHTML={{
                  __html: bioHtml,
                }}
              />
            </IntroBox>
          </IntroSection>

          <CtaBtns>
            <Link href={content.ctaButton?.fields?.link || "#"}>
              <ViewButton>{content.ctaButton?.fields?.buttonOrLinkText}</ViewButton>
            </Link>
          </CtaBtns>
          <BlogEntry>
            {content?.latestBlogText}
            <BlogSpan>
              <Link href={`/blog/${blogPost?.fields?.slug}`}>{blogPost?.fields?.title}</Link>
            </BlogSpan>
          </BlogEntry>
        </Wrapper>
      </Cta>
    </>
  );
};

export default Me;
