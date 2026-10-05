/*
 * Which of its own pictures an event or facility shares as its link-preview
 * image (src/lib/og.ts). Kept here rather than in the routes because each is
 * used by more than one page: an event by its /student-life or /academics
 * route, and the first event or facility of a group by that group's page.
 */
import { magazineIssues } from '@/data/magazine';
import type { CollegeEvent } from '@/data/events';
import type { Facility } from '@/data/facilities';
import { getGallery, getSingle } from '@/lib/images';
import { shareImage, type ShareImage } from '@/lib/og';

/**
 * An event's page hero, else its first photo (its card cover). The magazine
 * shares its front cover; an event with only a logo shares that.
 */
export function eventShareImage(event: CollegeEvent): ShareImage | undefined {
  if (event.flipbook) {
    const issue = magazineIssues[event.flipbook];
    return shareImage(`${issue.path}/pages/001.webp`, `${issue.title} ${issue.edition} — front cover`, { fit: 'card' });
  }
  const hero = getSingle('heroes', event.slug);
  if (hero) return shareImage(hero, event.name);
  const first =
    getGallery('events', event.slug)[0] ??
    event.galleries?.map((g) => getGallery('events', `${event.slug}/${g.folder}`)[0]).find(Boolean);
  if (first) return shareImage(first, event.name);
  const logo = event.logoCover && getSingle('logos', event.logoCover.name);
  return event.logoCover ? shareImage(logo, event.logoCover.alt, { fit: 'card', panel: event.logoCover.bg }) : undefined;
}

/** A facility's logo where it has one (the podcast studio), else its first photo. */
export function facilityShareImage(facility: Facility): ShareImage | undefined {
  if (facility.logo) {
    const logo = getSingle('logos', facility.logo.name);
    if (logo) return shareImage(logo, facility.logo.alt, { fit: 'card' });
  }
  return shareImage(getGallery('facilities', facility.slug)[0], facility.name);
}
