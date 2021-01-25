import { createClient, Entry } from "contentful";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import type { IPresentationFields } from "@/@types/generated/contentful";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import PresentationCard from "@/components/presentations/PresentationCard";

export const getStaticProps: GetStaticProps<{
	entries: Array<Entry<IPresentationFields>>;
}> = async () => {
	const client = createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
		accessToken:
			(process.env.VERCEL_ENV === "production"
				? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
				: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN) ??
			"ErrorNoAccessToken",
		host:
			process.env.VERCEL_ENV === "production"
				? "cdn.contentful.com"
				: "preview.contentful.com",
	});

	function orderEntriesByDate(
		a: Entry<IPresentationFields>,
		b: Entry<IPresentationFields>,
	): number {
		if (Date.parse(a.fields.date) > Date.parse(b.fields.date)) return -1;
		if (Date.parse(a.fields.date) < Date.parse(b.fields.date)) return 1;
		return 0;
	}

	const allEntries = await client.getEntries<IPresentationFields>({
		content_type: "presentation",
	});

	allEntries.items.sort(orderEntriesByDate);

	return { props: { entries: allEntries.items } };
};

export default function HomePage({
	entries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout>
			<Hero />
			<section className="container grid gap-8 grid-cols-1 justify-items-center mx-auto p-3 lg:grid-cols-2">
				{Array(4)
					// eslint-disable-next-line etc/no-assign-mutated-array
					.fill(entries[0])
					.map((entry, i) => {
						return (
							<>
								<PresentationCard
									// eslint-disable-next-line react/no-array-index-key
									key={entry.sys.id + i}
									{...entry.fields}
									imageURL={entry.fields.image.fields.file.url}
								/>
							</>
						);
					})}
				{JSON.stringify(entries[0].fields)}
			</section>
		</Layout>
	);
}
