import { IBlogList } from './interfaces/IBlog';

const blogsData: IBlogList = [
  {
    id: '1',
    title: 'Sex Ed: An Inclusive Teenage Guide to Sex and Relationships',
    content:
      'In September 2021, School of Sexuality Education published Sex Ed: An Inclusive Teenage Guide to Sex and Relationships. We’d been delivering sex and relationships education workshops in schools for a few years by then, and we wanted to put all of the experience we’d gained in that time to good use. We decided that the best way to do that would be to write a book together – one that could be accessed by teenagers all over the country, no matter who they were or where they were.',
    createdDate: new Date('May 16, 2022'),
    hashtags: [],
    coverImg: '/images/blogs/blog-1.jpg',
  },
  {
    id: '2',
    title: 'Developing RSE in a pandemic-era America',
    content:
      'On the first day of the sex education unit of health class, our teacher lined up the girls who were to be taken to a different presentation. Myself and the others went to a separate conference room to learn about breast cancer, while those who stayed in the classroom learned about prostate cancer. The class was required of all students in the high school, anywhere from 14 to 18 years old, though most take it as a freshman or sophomore.\nAt this age, teaching topics like consent, setting boundaries, and contraception is crucial. While contracting STIs as a young person and teen pregnancies are common in the U.S., so are boundary and consent issues. However, these skills are much less likely to be stressed within the classroom. \nThese are skills that every person in any physical scenario with another person should have, for example, a platonic cuddle. However, we left the conference room that day with only knowledge of how to do breast self-exams, speculating between ourselves what those who had stayed in the classroom had learned about prostates. ',
    createdDate: new Date('March 29, 2021'),
    hashtags: [],
    coverImg: '/images/blogs/blog-2.jpg',
  },
  {
    id: '3',
    title: 'Abortion as a Healthcare Issue',
    subTitle: 'WRITTEN BY SCHOOL OF SEXUALITY EDUCATION’S DR EMMA CHAN.',
    content:
      'A friend rang me late the other night. He’s a keen runner and had fallen over while training and hurt his leg. He was now in a lot of pain and extremely anxious that he’d broken it. He didn’t want to go to his local doctor - he’d torn a ligament in his knee training for an Ultra Marathon a couple of years ago.  His GP had made it very clear that she morally disapproved of runners. She’d refused to deal with him herself. Instead, she sent him to a colleague, saying that she ‘conscientiously objected’ to treating people who injured themselves ‘taking unnecessary risks through endurance tasks’. ',
    createdDate: new Date('May 27, 2020'),
    hashtags: [],
    coverImg: '/images/blogs/blog-3.jpg',
  },
];

export default blogsData;
