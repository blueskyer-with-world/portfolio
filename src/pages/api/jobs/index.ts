import { sanityClient } from '@lib/sanity';

import { jobsQuery } from '@queries/jobs';
import { NextApiRequest, NextApiResponse } from 'next';

const jobsApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const jobs = await sanityClient.fetch(jobsQuery);

	return res.status(200).json(jobs);
};

export default jobsApi;
