import type { NextApiRequest, NextApiResponse } from 'next';
import { IBlogList } from 'data/interfaces/IBlog';

import blogsData from 'data/blogs';

export default function handler(req: NextApiRequest, res: NextApiResponse<IBlogList>) {
  res.status(200).json(blogsData);
}
