import { sanityClient } from '@lib/sanity';

import { pagesQuery } from '@queries/pages';
import { NextApiRequest, NextApiResponse } from 'next';

const pagesApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const pages = await sanityClient.fetch(pagesQuery());

	return res.status(200).json(pages);
};

export default pagesApi;
