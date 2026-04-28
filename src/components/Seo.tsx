import Head from "next/head";
import { SITE_DEFAULT_IMAGE, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_TITLE, SITE_URL } from "@/src/constant/site";
import { links } from "@/src/constant/Links";

type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
};

const normalizeDescription = (value: string) => value.replace(/\s+/g, " ").trim();

const Seo = ({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  pathname = "/",
  image = SITE_DEFAULT_IMAGE,
}: SeoProps) => {
  const canonicalUrl = new URL(pathname, SITE_URL).toString();
  const ogImageUrl = new URL(image, SITE_URL).toString();
  const fullDescription = normalizeDescription(description);

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={SITE_KEYWORDS.join(", ")} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: SITE_NAME,
            url: canonicalUrl,
            description: fullDescription,
            sameAs: [links.github, links.linkedin],
            image: ogImageUrl,
            jobTitle: "Computer Science Student",
          }),
        }}
      />
    </Head>
  );
};

export default Seo;
