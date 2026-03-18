import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft, Share2 } from "lucide-react";
import { NEWS_ARTICLES } from "@/lib/news";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="pb-24 bg-cream min-h-screen pt-8">
      <div className="container max-w-4xl mx-auto px-4">
        <Link 
          href="/news" 
          className="inline-flex items-center text-sm font-bold text-brand hover:text-brand-light transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to News
        </Link>

        <header className="mb-10 text-center">
          <div className="inline-block bg-gold/20 text-gold-dark font-bold px-3 py-1 rounded-full uppercase text-xs tracking-wider mb-6">
            {article.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6 leading-tight text-balance">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center text-sm text-navy/60 font-medium tracking-wide gap-x-6 gap-y-2">
            <span className="flex items-center">
              <span className="font-bold text-brand mr-2">By {article.author}</span>
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" /> 
              {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" /> 
              {article.readTime}
            </span>
          </div>
        </header>

        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12 shadow-xl border border-border">
          <Image 
            src={article.image} 
            alt={article.title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border mx-auto max-w-3xl">
          <p className="text-xl md:text-2xl text-navy/80 font-heading font-medium leading-relaxed mb-8 italic border-l-4 border-gold pl-6">
            {article.excerpt}
          </p>

          <div className="prose prose-lg md:prose-xl prose-navy max-w-none mb-12">
            {/* Split the content into multiple paragraphs for visual formatting since it's mock string data */}
            {article.content.split('. ').map((sentence, i) => (
              <p key={i} className="mb-6 leading-relaxed text-navy whitespace-pre-line">{sentence}.</p>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-border pt-8 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold font-heading text-lg">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-navy uppercase tracking-wider">Written by</p>
                <p className="font-heading font-bold text-lg text-brand">{article.author}</p>
              </div>
            </div>
            
            <Button variant="outline" className="rounded-full flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Share
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
