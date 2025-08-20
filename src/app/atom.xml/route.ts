
export const runtime = 'edge'

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
}

// This would typically come from your CMS or database
const blogPosts: BlogPost[] = [
  {
    slug: 'machine-learning-in-finance',
    title: 'Applying Machine Learning in Financial Prediction Models',
    excerpt: 'How ML algorithms can provide accurate predictions for financial markets and risk assessment. Learn about key techniques used in quantitative finance.',
    date: '2025-04-01',
    author: 'Ismat Samadov'
  },
  {
    slug: 'optimizing-sql-queries',
    title: 'Advanced SQL Optimization Techniques for Big Data',
    excerpt: 'Performance tuning strategies for complex SQL queries when dealing with large datasets. Discover how to improve query execution time by over 80%.',
    date: '2025-03-15',
    author: 'Ismat Samadov'
  },
  {
    slug: 'nlp-for-fraud-detection',
    title: 'Using NLP for Financial Fraud Detection Systems',
    excerpt: 'How natural language processing can identify suspicious patterns in transaction descriptions and communication to detect potential fraud.',
    date: '2025-02-28',
    author: 'Ismat Samadov'
  },
  {
    slug: 'explainable-ai-banking',
    title: 'Explainable AI: Making ML Models Transparent for Banking Compliance',
    excerpt: 'How to develop machine learning models that are both powerful and explainable to meet regulatory requirements in the banking sector.',
    date: '2025-02-10',
    author: 'Ismat Samadov'
  }
]

export async function GET() {
  const baseUrl = 'https://ismat.pro'
  
  const atomXml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Ismat Samadov - Machine Learning Engineer Blog</title>
  <link href="${baseUrl}/atom.xml" rel="self"/>
  <link href="${baseUrl}"/>
  <updated>${new Date().toISOString()}</updated>
  <id>${baseUrl}/</id>
  <subtitle>Machine Learning Engineering insights, SQL optimization techniques, and AI development tutorials</subtitle>
  <generator>Next.js Atom Generator</generator>
  <rights>Copyright ${new Date().getFullYear()} Ismat Samadov</rights>
  <author>
    <name>Ismat Samadov</name>
    <email>ismetsemedov@gmail.com</email>
    <uri>${baseUrl}</uri>
  </author>
  <category term="Machine Learning"/>
  <category term="SQL Development"/>
  <category term="Data Analysis"/>
  <category term="AI Engineering"/>
  <logo>${baseUrl}/og-image.jpg</logo>
  ${blogPosts.map(post => `
  <entry>
    <title><![CDATA[${post.title}]]></title>
    <link href="${baseUrl}/blog/${post.slug}"/>
    <updated>${new Date(post.date).toISOString()}</updated>
    <id>${baseUrl}/blog/${post.slug}</id>
    <content type="html"><![CDATA[${post.excerpt}]]></content>
    <summary><![CDATA[${post.excerpt}]]></summary>
    <author>
      <name>${post.author || 'Ismat Samadov'}</name>
    </author>
    <category term="Machine Learning"/>
  </entry>`).join('')}
</feed>`;

  return new Response(atomXml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}