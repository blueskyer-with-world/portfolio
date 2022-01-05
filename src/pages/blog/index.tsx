import { client } from 'apollo-client';
import { format } from 'date-fns';
import { gql } from '@apollo/client';
import Link from 'next/link';
import { NextPage } from 'next';

import { Container } from 'Atoms/Container';
import { Layout } from 'Templates/Layout';

interface IProps {
	posts: any;
}

const BlogPage: NextPage<IProps> = ({ posts }) => {
	return (
		<Layout
			title="Software Engineering Blog by Jacob Herper"
			description="I try to make an effort to document my journey as a software developer in the form of blog posts. Here you find some of the articles I published over the years."
		>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					Blog
				</h1>
				{posts.map(({ title, slug, introText, publishedDate }: any) => (
					<article key={slug} className="mb-12">
						<Link href={`/blog/${slug}`}>
							<a className="group">
								<h1 className="text-2xl font-bold mb-2 relative inline-block underlined">
									{title}
								</h1>
								<p>{introText}</p>
								<em className="block mt-2">
									Published on {format(new Date(publishedDate), 'do MMMM yyyy')}
								</em>
							</a>
						</Link>
					</article>
				))}
			</Container>
		</Layout>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query BlogPageQuery {
				blogs(orderBy: publishedDate_DESC) {
					slug
					title
					introText
					publishedDate
				}
			}
		`,
	});

	return {
		props: {
			posts: data.blogs,
		},
	};
}

export default BlogPage;
