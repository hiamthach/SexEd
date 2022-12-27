import type { NextApiRequest, NextApiResponse } from 'next';
import { IBlog } from 'data/interfaces/IBlog';

import blogsData from 'data/blogs';

export default function handler(req: NextApiRequest, res: NextApiResponse<IBlog | undefined>) {
  const blogId = req.query.blogId;
  const data = blogsData.find((blog) => blog.id === blogId);

  res.status(200).json(data);
}
