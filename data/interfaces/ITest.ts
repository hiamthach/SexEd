export interface ITest {
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface ITestList extends Array<ITest> {}
