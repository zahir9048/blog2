import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq, PortableText } from "next-sanity";
import { BsFacebook, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";
import { Post } from "../../../../../types";
import Link from "next/link";
import Container from "@/components/Container";
import { RichText } from "@/components/RichText";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[type == 'post']{ slug }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const Slugpage = async ({ params }: Props) => {
  const { slug } = await params;
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{ ..., body, author-> }`;
  const post = await client.fetch(query, { slug });

  return (
    <Container className="mb-10 p-[50px]">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          <Image
            src={urlFor(post?.mainImage).url()}
            alt="main Image"
            className="object-cover w-full"
          />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col gap-5 items-center px-4">
          <Image
            src={urlFor(post?.author?.image).url()}
            alt="author profile image"           width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-3xl text-[#89418e] font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-center tracking-wide text-sm">
            {post?.author?.description}
          </p>
          <div className="flex items-center gap-3">
            <Link href="https://www.youtube.com" target="_blank">
              <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
            </Link>
            <Link href="https://github.com/adeelmaheen" target="_blank">
              <BsGithub className="text-2xl hover:text-gray-500 duration-200 cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <BsFacebook className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/maheen-arif-a929412b6/"
              target="_blank"
            >
              <BsLinkedin className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default Slugpage;
