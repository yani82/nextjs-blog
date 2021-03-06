import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a Malaysian-American Software Engineer based in NYC, and I love using code for good. Currently, I was fortunate enough to be selected as a fellow at Tally Up, a relatively new startup that provides powerful data analytical insight for progressive political campaigns. I am eagerly working on making their Vanilla JavaScript application mobile-friendly and responsive utilizing TailwindCSS. Eventually, I plan to implement a React front-end to it. 
            
            I've graduated from Flatiron School's software engineering course where I've learned Ruby, JavaScript, Ruby on Rails, React, Redux, SQL, Git, Active Storage, CSS, HTML, and Bootstrap - just to name a few. I'm hoping to try out different stacks like MEAN, MERN, and learn Python, Node.js, d3js, AWS, Snowflake, Sanity.io, anything I happen to stumble upon next. In addition to coding, I am a mom of two beautiful kids! I also love traveling. So far, I've been to 26 countries and counting.

            My experience of living and working in Malaysia has definitely been an advantage, giving me unique skills in cross-cultural collaboration, and now with an added passion for applying new technologies to provide solutions to social and global issues. If you would like to share any resources and advice in traversing through the job search in the tech industry, please feel free to connect with me on Linkedin, GitHub, Twitter, or email me.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
