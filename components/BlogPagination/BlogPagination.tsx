import { NextPage } from "next";
import Link from "next/link";
import { PageTurner, Prev, Next, ArrowLeft, ArrowRight } from "./style";

interface Props {
  currentPage: string;
  totalPages: number;
}

const BlogPagination: NextPage<Props> = ({ currentPage, totalPages }) => {
  console.log(typeof currentPage, typeof totalPages);
  const isFirst = currentPage == "1";
  const isLast = currentPage == totalPages.toString();
  const prevPage =
    parseInt(currentPage, 10) - 1 == 1
      ? "/blog"
      : `/blog/page/${parseInt(currentPage, 10) - 1}`;
  const nextPage = `/blog/page/${parseInt(currentPage, 10) + 1}`;
  return (
    <PageTurner>
      <Prev>
        {!isFirst && (
          <Link href={prevPage}>
            <ArrowLeft></ArrowLeft>Previous Page
          </Link>
        )}
      </Prev>
      <Next>
        {!isLast && (
          <Link href={nextPage}>
            Next Page<ArrowRight></ArrowRight>
          </Link>
        )}
      </Next>
    </PageTurner>
  );
};

export default BlogPagination;
