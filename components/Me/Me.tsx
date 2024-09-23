// Node modules
import Link from "next/link";
import Image from "next/image";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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

  return (
    <>
      <HeadSeo
        title="Daniel.Me"
        description="{content?.metaDescription}"
        canonicalUrl={siteMetadata.siteUrl}
      />
      <Cta>
        <Header>
          <Title>{content?.heroTitle}</Title>
          <Title>{randomSubtitle}</Title>
        </Header>
        <Wrapper>
          <IntroSection>
            <Social>
              <MediaIcons>
                {content?.icons && content.icons.map((icon, index) => (
                  <Link
                    key={index}
                    href={icon.fields.link?.fields.link || "#"}
                    rel="noopener noreferrer"
                    target={icon.fields.link?.fields.openInNewTab ? '_blank' : '_self'}
                  >
                    <Image
                      src={`https:${icon.fields.icon?.fields.file.url}`}
                      width="32"
                      height="32"
                      alt={icon.fields.icon?.fields.title || "Icon"}
                    />
                  </Link>
                ))}
              </MediaIcons>
              <MeImg
                as={MeImg}
                alt="Img"
                src={
                  content.profileImage?.fields?.file?.url
                    ? `https://${content.profileImage.fields.file.url}`
                    : ""
                }
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
