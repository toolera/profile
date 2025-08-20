// src/components/Breadcrumbs.tsx
import Link from 'next/link'

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
        {items.map((item, index) => (
          <div key={item.url} className="flex items-center">
            {index > 0 && (
              <svg 
                className="w-4 h-4 text-gray-400 mx-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span className="text-gray-500 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
      <BreadcrumbStructuredData items={items} />
    </>
  )
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }}
    />
  );
}