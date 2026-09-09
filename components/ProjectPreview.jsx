"use client";

import {
  Monitor,
  Server,
  Database,
  Shield,
  Sparkles,
  ShoppingBag,
  MessageSquare,
  BarChart3,
  Users,
} from "lucide-react";

function BrowserFrame({ children }) {
  return (
    <div className="rounded-xl border border-line bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-highlight/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 h-4 flex-1 max-w-[200px] rounded-md bg-ink/5 px-2 text-[9px] leading-4 text-muted">
          product-interface
        </span>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}

function PhoneFrame({ children }) {
  return (
    <div className="mx-auto w-[150px] rounded-3xl border-[4px] border-ink bg-ink p-1">
      <div className="overflow-hidden rounded-[18px] bg-white">
        <div className="mx-auto my-1 h-1 w-12 rounded-full bg-ink/15" />
        <div className="px-2 pb-2">{children}</div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="hidden w-10 flex-col gap-1.5 rounded-lg bg-ink/5 p-1.5 sm:flex">
      <span className="h-6 w-6 rounded-md bg-accent" />
      <span className="h-6 w-6 rounded-md bg-ink/10" />
      <span className="h-6 w-6 rounded-md bg-ink/10" />
      <span className="h-6 w-6 rounded-md bg-ink/10" />
    </div>
  );
}

function DashboardMock({ accent = "#635BFF" }) {
  return (
    <div className="flex gap-2 rounded-lg border border-line p-2">
      <Sidebar />
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-24 rounded bg-ink/20" />
          <div className="h-4 w-10 rounded-md" style={{ backgroundColor: accent }} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-line p-1.5">
              <div className="h-1.5 w-8 rounded bg-ink/15" />
              <div className="mt-1 h-3 w-6 rounded bg-ink/25" />
            </div>
          ))}
        </div>
        <div className="rounded-md border border-line p-1.5">
          <div className="h-1.5 w-16 rounded bg-ink/15" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="mt-1 flex justify-between">
              <div className="h-1.5 w-14 rounded bg-ink/10" />
              <div className="h-1.5 w-8 rounded bg-ink/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PipelineMock({ accent = "#FF6B6B" }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg border border-line p-2.5">
      <div className="flex items-center gap-1.5">
        <span className="rounded-md p-1" style={{ backgroundColor: `${accent}1A` }}>
          <Monitor className="h-3 w-3" style={{ color: accent }} />
        </span>
        <div className="h-2 w-16 rounded bg-ink/15" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="rounded-md p-1" style={{ backgroundColor: `${accent}1A` }}>
          <Shield className="h-3 w-3" style={{ color: accent }} />
        </span>
        <div className="h-2 w-16 rounded bg-ink/15" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="rounded-md p-1" style={{ backgroundColor: `${accent}1A` }}>
          <Server className="h-3 w-3" style={{ color: accent }} />
        </span>
        <div className="h-2 w-16 rounded bg-ink/15" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="rounded-md p-1" style={{ backgroundColor: `${accent}1A` }}>
          <Database className="h-3 w-3" style={{ color: accent }} />
        </span>
        <div className="h-2 w-16 rounded bg-ink/15" />
      </div>
      <div className="mt-1 flex items-center gap-1.5 rounded-md bg-ink p-1.5">
        <Sparkles className="h-3 w-3 text-highlight" />
        <div className="h-2 w-14 rounded bg-white/40" />
      </div>
    </div>
  );
}

function PhoneAppMock({ accent = "#FF6B6B" }) {
  return (
    <div className="space-y-1.5">
      <div className="rounded-md p-1.5" style={{ backgroundColor: `${accent}1A` }}>
        <div className="flex items-center justify-between">
          <div className="h-2 w-12 rounded bg-white/80" />
          <Monitor className="h-3 w-3" style={{ color: accent }} />
        </div>
        <div className="mt-1.5 h-8 rounded bg-ink/5" />
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-md border border-line p-1.5">
          <div className="h-1.5 w-8 rounded bg-ink/15" />
          <div className="mt-1 h-2.5 w-10 rounded bg-ink/25" />
        </div>
        <div className="rounded-md border border-line p-1.5">
          <div className="h-1.5 w-8 rounded bg-ink/15" />
          <div className="mt-1 h-2.5 w-10 rounded bg-ink/25" />
        </div>
        <div className="rounded-md border border-line p-1.5">
          <div className="h-1.5 w-8 rounded bg-ink/15" />
          <div className="mt-1 h-2.5 w-10 rounded bg-ink/25" />
        </div>
        <div className="rounded-md border border-line p-1.5">
          <div className="h-1.5 w-8 rounded bg-ink/15" />
          <div className="mt-1 h-2.5 w-10 rounded bg-ink/25" />
        </div>
      </div>
    </div>
  );
}

function ShopMock() {
  return (
    <div className="flex gap-2 rounded-lg border border-line p-2">
      <div className="hidden w-12 flex-col gap-1.5 sm:flex">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1">
            {i === 0 ? (
              <ShoppingBag className="h-3 w-3 text-accent" />
            ) : (
              <span className="h-3 w-3 rounded bg-ink/10" />
            )}
            <div className="h-1.5 w-8 rounded bg-ink/10" />
          </div>
        ))}
      </div>
      <div className="flex-1">
        <div className="mb-1.5 flex items-center justify-between">
          <div className="h-2 w-16 rounded bg-ink/20" />
          <div className="h-3 w-12 rounded bg-ink/12" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-md border border-line p-1.5">
              <div className="h-8 rounded bg-ink/5" />
              <div className="mt-1 h-1.5 w-9 rounded bg-ink/15" />
              <div className="mt-0.5 h-2 w-6 rounded bg-accent/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VoiceMock() {
  return (
    <div className="space-y-1.5 rounded-lg border border-line p-2.5">
      <div className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-coral/15 text-coral">
          <MessageSquare className="h-2.5 w-2.5" />
        </span>
        <div className="h-2 w-16 rounded bg-ink/15" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
          <BarChart3 className="h-2.5 w-2.5" />
        </span>
        <div className="h-2 w-12 rounded bg-ink/15" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-highlight/20 text-highlight">
          <Users className="h-2.5 w-2.5" />
        </span>
        <div className="h-2 w-14 rounded bg-ink/15" />
      </div>
      <div className="mt-1 flex gap-1">
        <div className="h-1.5 flex-1 rounded bg-ink/10" />
        <div className="h-1.5 w-10 rounded bg-coral/60" />
      </div>
    </div>
  );
}

export default function ProjectPreview({ project }) {
  switch (project.id) {
    case "gymflow":
      return (
        <BrowserFrame>
          <DashboardMock accent={project.accent} />
        </BrowserFrame>
      );
    case "gohelper":
      return (
        <PhoneFrame>
          <PhoneAppMock accent={project.accent} />
        </PhoneFrame>
      );
    case "malis":
      return (
        <BrowserFrame>
          <PipelineMock accent={project.accent} />
        </BrowserFrame>
      );
    case "toheed":
      return (
        <BrowserFrame>
          <ShopMock />
        </BrowserFrame>
      );
    case "khangroups":
      return (
        <BrowserFrame>
          <div className="flex gap-2 rounded-lg border border-line p-2">
            <div className="hidden w-12 flex-col gap-1.5 sm:flex">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded bg-ink/10" />
                  <div className="h-1.5 w-8 rounded bg-ink/10" />
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 w-20 rounded bg-ink/20" />
              <div className="h-1.5 w-full rounded bg-ink/10" />
              <div className="h-1.5 w-3/4 rounded bg-ink/10" />
              <div className="flex gap-1.5">
                <div className="h-4 w-12 rounded-md bg-accent/80" />
                <div className="h-4 w-12 rounded-md bg-ink/10" />
              </div>
            </div>
          </div>
        </BrowserFrame>
      );
    default:
      return (
        <BrowserFrame>
          <VoiceMock />
        </BrowserFrame>
      );
  }
}
