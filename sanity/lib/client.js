import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId : "sv0o6b7a",
  dataset : "production",
  apiVersion,
  useCdn : true,
  perspective: 'raw',
})

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}