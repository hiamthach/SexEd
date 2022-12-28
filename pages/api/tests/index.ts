import type { NextApiRequest, NextApiResponse } from 'next';
import { ITestList } from 'data/interfaces/ITest';

import testData from 'data/test';

export default function handler(req: NextApiRequest, res: NextApiResponse<ITestList>) {
  res.status(200).json(testData);
}
