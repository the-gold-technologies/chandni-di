import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { STORIES_OF_CHANGE } from "@/data/ngoData";
import {
  StoryHero,
  StoryJourneyTimeline,
  StoryNarrativeSection,
  StoryRelatedSection,
} from "./components";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return STORIES_OF_CHANGE.map((story) => ({
    id: story.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const story = STORIES_OF_CHANGE.find((s) => s.id === id);

  if (!story) {
    return {
      title: "Story Not Found | Chandni Di",
    };
  }

  return {
    title: `${story.name}'s Story of Change | Chandni Di`,
    description: story.excerpt || story.title,
  };
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const story = STORIES_OF_CHANGE.find((s) => s.id === id);

  if (!story) {
    notFound();
  }

  // Related stories (other scholars excluding the current one)
  const relatedStories = STORIES_OF_CHANGE.filter(
    (s) => s.id !== story.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      {/* 1. Hero Showcase with balanced Portrait, Title & Milestones */}
      <StoryHero story={story} />

      {/* 2. 3-Stage Transformation Timeline */}
      <StoryJourneyTimeline story={story} />

      {/* 3. The Full Editorial Narrative with Sticky Sponsorship Companion */}
      <StoryNarrativeSection story={story} />

      {/* 4. More Inspiring Scholar Stories */}
      <StoryRelatedSection relatedStories={relatedStories} />
    </main>
  );
}
