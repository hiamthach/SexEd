import type { NextApiRequest, NextApiResponse } from 'next';
import { ITest } from 'data/interfaces/ITest';

import testData from 'data/test';

export default function handler(req: NextApiRequest, res: NextApiResponse<ITest | undefined>) {
  const testId = req.query.testId;
  const data = testData.find((test) => test.id === testId);

  res.status(200).json(data);
}
