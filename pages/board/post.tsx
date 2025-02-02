import { useRouter } from "next/router";
import Link from "next/link";

const PostLine = () => {
    return (
      <div
        style={{
          width: "90%",
          borderBottom: "1px solid",
          marginTop: "20px",
          marginBottom:"20px",
        }}
      >
      </div>
    );
  };

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
        <h1>목록 {id}</h1>
        <section style={{marginLeft:"80px",marginTop:"30px"}}>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
              <a>고민 내용 1</a>
            </Link>
          </li>
          <PostLine/>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
              <a>고민 내용 2</a>
            </Link>
          </li>
          <PostLine/>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
              <a>고민 내용 3</a>
            </Link>
          </li>
          <PostLine/>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
              <a>고민 내용 4</a>
            </Link>
          </li>
          <PostLine/>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
              <a>고민 내용 5</a>
            </Link>
          </li>
          <PostLine/>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
              <a>고민 내용 6</a>
            </Link>
          </li>
          <PostLine/>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
              <a>고민 내용 7</a>
            </Link>
          </li>
          <PostLine/>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
              <a>고민 내용 8</a>
            </Link>
          </li>
          <PostLine/>
          <li>
            <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
              <a>고민 내용 9</a>
            </Link>
          </li>
          <PostLine/>
        </section>
      </>
    );
};

export default Post;