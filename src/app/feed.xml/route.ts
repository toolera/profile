
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
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title>Ismat Samadov - Machine Learning Engineer Blog</title>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <link>${baseUrl}</link>
    <description>Machine Learning Engineering insights, SQL optimization techniques, and AI development tutorials by Ismat Samadov</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <language>en-US</language>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <generator>Next.js RSS Generator</generator>
    <managingEditor>ismetsemedov@gmail.com (Ismat Samadov)</managingEditor>
    <webMaster>ismetsemedov@gmail.com (Ismat Samadov)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Ismat Samadov</copyright>
    <category>Machine Learning</category>
    <category>SQL Development</category>
    <category>Data Analysis</category>
    <category>AI Engineering</category>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/og-image.jpg</url>
      <title>Ismat Samadov - Machine Learning Engineer Blog</title>
      <link>${baseUrl}</link>
      <width>1200</width>
      <height>630</height>
      <description>Machine Learning Engineering insights and tutorials</description>
    </image>
    ${blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>ismetsemedov@gmail.com (${post.author || 'Ismat Samadov'})</author>
      <category>Machine Learning</category>
      <source url="${baseUrl}/feed.xml">Ismat Samadov Blog</source>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}