import Link from "next/link";

import CircleScroll from "@/components/CircleScroll";
import IsometricStack from "@/components/Isometric";
import RunningManRipple from "@/components/RunningManRipple";
import SmoothScrollText from "@/components/SmoothScrollText";
import ScrollIndicator from "@/components/supportingComponents/ScrollIndicator";

function page() {
  return (
    <main className="h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth bg-neutral-50">
      <section className="relative flex h-screen snap-start flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 px-6 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Interactive Lab
          </p>
          <h1 className="mb-8 text-[clamp(3rem,10vw,8rem)] font-light leading-[0.9] tracking-tight text-neutral-900">
            Motion
            <br />
            <span className="font-medium">Experiments</span>
          </h1>
          <p className="mx-auto max-w-md text-base text-neutral-500">
            Precision-engineered interactions exploring the boundary between
            interface and art. Each piece is a study in motion design.
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>
      <section className="snap-start border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-center py-20 lg:col-span-4 lg:pr-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                01
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Kinetic Figure
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                A figure drawn in pure SVG paths that reacts to your cursor.
                Hover triggers a ripple cascade — each stroke animates outward
                with spring-driven elasticity.
              </p>
              <div className="flex gap-3">
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Proximity
                </span>
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Ripple
                </span>
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Spring
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center border-neutral-200 lg:col-span-8 lg:border-l">
              <RunningManRipple />
            </div>
          </div>
        </div>
      </section>
      <section className="snap-start border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="order-2 flex items-center justify-center border-neutral-200 lg:order-1 lg:col-span-8 lg:border-r">
              <IsometricStack />
            </div>
            <div className="order-1 flex flex-col justify-center py-20 lg:order-2 lg:col-span-4 lg:pl-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                02
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Stacked Interfaces
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                Five isometric UI layers compressed into a deck. Hover to fan
                them apart — the focused card pulls forward while others recede
                with reduced opacity.
              </p>
              <div className="flex gap-3">
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Isometric
                </span>
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Depth
                </span>
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Focus
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="snap-start border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-center py-20 lg:col-span-4 lg:pr-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                03
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Type Reel
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                A vertical type carousel driven by scroll input. The active word
                snaps into sharp focus while neighboring entries dissolve into a
                soft depth-of-field blur.
              </p>
              <div className="flex gap-3">
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Kinetic
                </span>
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Typography
                </span>
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Blur
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center border-neutral-200 lg:col-span-8 lg:border-l">
              <div className="h-[400px] w-full">
                <SmoothScrollText infinite={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="snap-start border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="order-2 flex items-center justify-center border-neutral-200 lg:order-1 lg:col-span-8 lg:border-r">
              <CircleScroll />
            </div>
            <div className="order-1 flex flex-col justify-center py-20 lg:order-2 lg:col-span-4 lg:pl-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                04
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Arc Selector
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                Labels mapped onto an invisible circular arc — scroll to rotate
                the wheel. The active entry anchors at the apex while distant
                items curve away and fade to silence.
              </p>
              <div className="flex gap-3">
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Arc
                </span>
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Curvature
                </span>
                <span className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600 shadow-inner">
                  Decay
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-center py-20 lg:col-span-4 lg:pr-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                05
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Prism Effect
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                Card slicing animation with staggered reveal. Geometric
                decomposition with smooth transitions.
              </p>
              <div className="flex gap-3">
                <span className="rounded shadow-inner bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Slicing
                </span>
                <span className="rounded shadow-inner bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Stagger
                </span>
                <span className="rounded shadow-inner bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Geometric
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center border-neutral-200 lg:col-span-8 lg:border-l">
              <PrismAnimation />
            </div>
          </div>
        </div>
      </section> */}

      <footer className="border-t border-neutral-200 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-sm text-neutral-400">
                Built by{" "}
                <Link
                  href="https://x.com/jsmikat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @jsmikat
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Motion Experiments
              </span>
              <div className="h-4 w-px bg-neutral-700" />
              <span className="text-xs text-neutral-500">2026</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default page;
