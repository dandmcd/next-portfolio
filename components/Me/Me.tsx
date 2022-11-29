import Link from "next/link";
import { CommonButton } from "../../styles/styledCommon";
import {
  Cta,
  Header,
  Wrapper,
  Title,
  FadeTitle,
  FadeTitleB,
  FadeTitleC,
  IntroSection,
  IntroBox,
  Intro,
  MeImg,
  CtaBtns,
  BlogEntry,
  BlogSpan,
  MediaIcons,
  MediaIcon,
  Social,
} from "./style";
import linkedin from "../../public/icons/linkedin.png";
import github from "../../public/icons/github.png";
import email from "../../public/icons/message.png";
import selfie from "../../public/computerdan.jpg";
import { BlogProps } from "../../pages/blog";
import { NextPage } from "next";

interface Props {
  blogPost: BlogProps;
}

const Me: NextPage<Props> = ({ blogPost }) => {
  return (
    <Cta>
      <Header>
        <Title>Bringing ideas to life</Title>
        <Title>
          <FadeTitle>back</FadeTitle>
          <FadeTitleB> to</FadeTitleB> <FadeTitleC> front</FadeTitleC>
        </Title>
      </Header>
      <Wrapper>
        <IntroSection>
          <Social>
            <MediaIcons>
              <a
                href="https://github.com/givionte"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MediaIcon
                  as={MediaIcon}
                  src={github}
                  width="32"
                  height="32"
                  alt="Github"
                ></MediaIcon>
              </a>
              <Link href="/contact">
                <MediaIcon
                  as={MediaIcon}
                  src={email}
                  width="32"
                  height="32"
                  alt="Email"
                ></MediaIcon>
              </Link>
              <a
                href="https://www.linkedin.com/in/dandmcd/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MediaIcon
                  as={MediaIcon}
                  src={linkedin}
                  width="32"
                  height="32"
                  alt="LinkedIn"
                ></MediaIcon>
              </a>
            </MediaIcons>
            <MeImg as={MeImg} alt="Img" src={selfie} width="150" height="150" />
          </Social>
          <IntroBox>
            <Intro>
              Hello, I am Daniel McDermott, a software developer majoring in
              Computer Science. I create full-stack apps using multiple
              programming languages including TypeScript and Python, along with
              many of the latest tools including React and GraphQL.
            </Intro>
          </IntroBox>
        </IntroSection>

        <CtaBtns>
          <Link href="/projects">
            <CommonButton>View My Projects</CommonButton>
          </Link>
        </CtaBtns>
        <BlogEntry>
          Latest Blog Entry:{" "}
          <BlogSpan>
            <Link href={`/blog/${blogPost.slug}`}>{blogPost.title}</Link>
          </BlogSpan>
        </BlogEntry>
      </Wrapper>
    </Cta>
  );
};

export default Me;
